import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'
import Layout from '@/layout.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])

export { router }
