import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function AppLayout() {
    const [open, setOpen] = useState(false);

    function openSidebar() {
        setOpen(true);
    }
    function CloseSidebar() {
        setOpen(false);
    }

    return (
        <div className="flex min-h-screen">


            <div className="hidden md:block shrink-0">
                <Sidebar />
            </div>


            {open && (
                <div className="fixed inset-0 z-50 md:hidden flex">

                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={openSidebar}
                    />

                    <div className="relative w-64 h-full bg-gray-900 text-white z-10 flex flex-col">
                        <button
                            className="absolute top-3 right-3 text-white"
                            onClick={CloseSidebar}
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <Sidebar />
                    </div>
                </div>
            )}


            <div className="flex-1 flex flex-col min-w-0">


                <header className="md:hidden flex items-center h-12 px-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black shrink-0">
                    <button
                        onClick={openSidebar}
                        className="p-1 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        aria-label="Abrir menu"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200">
                        AquaSmart
                    </span>
                </header>

                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}