import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "./layout/app"
import { Dashboard } from "./page/dashboard/dashboard"
import { Alert } from "./page/alert/alert"
import { NotFound } from "./404"


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
                path: "/alert",
                element: <Alert />
            },
            {

            }
        ]


    },
    {
        path: "*",
        element: <NotFound />
    }
])