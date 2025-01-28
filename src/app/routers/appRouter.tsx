import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../layout";
import { Projects } from "pages/projects";
import { Invites } from "pages/invites";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/" replace />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/invites',
                element: <Invites />
            },
            {
                path: '/projects/createproject',
                element: <></>
            }
        ]
    }
])