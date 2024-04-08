import { createBrowserRouter } from "react-router-dom";

import { routes } from "../constants/routes";

import {
    Help,
    Home,
    Income,
    Layout,
    Product,
    Promote,
    Customers,
    Dashboard,
} from "../pages";

export const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Home />,
    },
    {
        path: routes.admin,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: routes.adminMenu.customers,
                element: <Customers />,
            },
            { path: routes.adminMenu.help, element: <Help /> },
            { path: routes.adminMenu.income, element: <Income /> },
            { path: routes.adminMenu.product, element: <Product /> },
            { path: routes.adminMenu.promote, element: <Promote /> },
        ],
    },
]);
