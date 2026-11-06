import { createBrowserRouter } from "react-router";
import CreateProducts from "../../features/product/pages/createProducts";

export const AppRouter = createBrowserRouter([
    { path: '/create/product', element: <CreateProducts /> }
])