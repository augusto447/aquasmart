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

            {/* botão mobile */}
            <button
                className="md:hidden p-3 fixed top-2 right-2 z-50 bg-gray-900 text-white rounded"
                onClick={openSidebar}
            >
                <Menu className="w-3 h-3" />
            </button>

            {/* sidebar desktop */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* OVERLAY MOBILE */}
            {open && (
                <div className="fixed inset-0 z-50 md:hidden">

                    {/* fundo escuro */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={closeSidebar}
                    />

                    {/* sidebar mobile (CORRIGIDA) */}
                    <div className="relative w-72 h-full bg-gray-900 text-white z-50">

                        {/* botão fechar */}
                        <button
                            className="absolute top-3 right-3 text-white"
                            onClick={closeSidebar}
                        >
                            <X />
                        </button>

                        {/* conteúdo da sidebar */}
                        <Sidebar />
                    </div>
                </div>
            )}

            {/* conteúdo principal */}
            <main className="flex-1 md:ml-0">
                <Outlet />
            </main>

        </div>
    );
}