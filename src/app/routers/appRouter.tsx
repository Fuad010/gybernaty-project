import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/projects" replace />
            },
            {
                path: '/projects',
                element: <></>
            }
        ]
    }
])