import { AlertTriangle, BarChart3, Home } from "lucide-react"
import logotipo from "../assets/logo.png"
import { Link } from "react-router-dom"


import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"



export function Sidebar() {
    return (
        <div className="flex">
            <aside className=" w-80 h-screen bg-gray-900 text-white flex flex-col p-2">
                <div className="flex items-center text-xl " >
                    <img className="md:w-20 md:h-20 w-10 h-10" src={logotipo} alt="logotipo" />
                    <div className="flex flex-col">
                        <span className="md:text-2xl text-xs">Aquasmart</span>
                        <span className="md:text-sm text-xs">Aquicultura Inteligente</span>
                    </div>
                </div>
                <nav className="flex flex-col text-gray-300  text-lg gap-5 mt-6 md:p-2 p-0">

                    <Link className="flex items-center gap-3 hover:bg-blue-950 p-4 rounded-full" to="/">
                        <Home className="w-6 h-6" />
                        Dashboard
                    </Link>

                    <Link className="flex items-center gap-3  p-4  hover:bg-blue-950 rounded-full" to="/alertas">
                        <AlertTriangle className="w-6 h-6" />
                        Alertas
                    </Link>
                    <Link className="flex items-center  gap-3  hover:bg-blue-950 p-4  rounded-full" to="/historico">
                        <BarChart3 className="w-6 h-6" />
                        Históricos
                    </Link>

                </nav>

                <div className="flex items-center gap-3  p-2 bg-gray-800 rounded-lg mt-auto">

                    <Avatar >
                        <AvatarImage src="" />
                        <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-white text-sm">Administrador</p>
                        <p className=" text-gray-400">Admin</p>
                    </div>

                </div>

            </aside>

        </div>

    )
}