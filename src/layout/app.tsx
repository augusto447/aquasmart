import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function AppLayout() {
    const [open, setOpen] = useState(false);

    function openSidebar() {
        setOpen(true);
    }

    function closeSidebar() {
        setOpen(false);
    }

    return (
        <div className="flex">


            <button
                className="md:hidden p-3 fixed top-2 left-60 z-50 bg-gray-900 text-white rounded"
                onClick={openSidebar}
            >
                <Menu className="w-3 h-3" />
            </button>


            <div className="hidden md:block">
                <Sidebar />
            </div>


            {open && (
                <div className="fixed inset-0 z-50 md:hidden">


                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={closeSidebar}
                    />


                    <div className="relative w-72 h-full bg-gray-900 text-white z-50">


                        <button
                            className="absolute top-3 right-3 text-white"
                            onClick={closeSidebar}
                        >
                            <X />
                        </button>


                        <Sidebar />
                    </div>
                </div>
            )}


            <main className="flex-1 md:ml-0 overflow-y-auto">
                <Outlet />
            </main>

        </div>
    );
}