import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "./layout/app"
import { Dashboard } from "./page/dashboard/dashboard"

import { NotFound } from "./404"
import Historico from "./page/history/historico"
import Alertas from "./page/alert/alertas"


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/alertas",
                element: <Alertas />
            },


            {
                path: "/historico",
                element: <Historico />
            },
        ]


    },
    {
        path: "*",
        element: <NotFound />
    }
])