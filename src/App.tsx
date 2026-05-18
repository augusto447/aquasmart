import { routes } from "./routes";
import { ThemeProvider } from "./components/theme/theme-provider"
import { RouterProvider } from "react-router-dom"

export function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="smart-aquaculture-dashboard">
            <RouterProvider router={routes} />
        </ThemeProvider>
    )
}

