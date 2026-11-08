import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Products from '../../features/product/pages/Products'
import CreateProducts from '../../features/product/pages/createProducts'
import MainLayout from '../layout/mainLayout'

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/home',
            element:<MainLayout/>,
            children: [
                {
                    path: '',
                    element: <Products />
                },
                {
                    path: 'create/product',
                    element: <CreateProducts />
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes