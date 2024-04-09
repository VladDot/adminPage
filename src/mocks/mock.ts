import {
    HelpIcon,
    CustomerIcon,
    DashboardIcon,
    IncomeIcon,
    ProductIcon,
    PromoteIcon,
} from "../assets";

import { routes } from "../constants/routes";

export const mockNavbar = [
    {
        nameNavbar: "dashboard",
        to: routes.admin,
        id: "dashboard",
        icon: DashboardIcon,
    },
    {
        nameNavbar: "product",
        to: routes.adminMenu.product,
        id: "product",
        icon: ProductIcon,
    },
    {
        nameNavbar: "customers",
        to: routes.adminMenu.customers,
        id: "customers",
        icon: CustomerIcon,
    },
    {
        nameNavbar: "income",
        to: routes.adminMenu.income,
        id: "income",
        icon: IncomeIcon,
    },
    {
        nameNavbar: "promote",
        to: routes.adminMenu.promote,
        id: "promote",
        icon: PromoteIcon,
    },
    {
        nameNavbar: "help",
        to: routes.adminMenu.help,
        id: "help",
        icon: HelpIcon,
    },
];
