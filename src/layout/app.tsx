import { Sidebar } from "../components/sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <div className="flex">
            <Sidebar />

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}