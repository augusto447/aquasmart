import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="flex justify-center h-screen flex-col items-center gap-4 ">
            <h1 className="text-4xl">Pagina não encontrada</h1>
            <p>Volta para o  {""}
                <Link to="/" className="text-gray-500 ">Dashboard</Link>
            </p>
        </div>
    )
}