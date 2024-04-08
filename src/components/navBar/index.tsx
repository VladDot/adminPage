import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={routes.admin}>dashboard</Link>
                    </li>
                    <li>
                        <Link to={routes.adminMenu.product}>product</Link>
                    </li>
                    <li>
                        <Link to={routes.adminMenu.customers}>customers</Link>
                    </li>
                    <li>
                        <Link to={routes.adminMenu.income}>income</Link>
                    </li>
                    <li>
                        <Link to={routes.adminMenu.promote}>promote</Link>
                    </li>
                    <li>
                        <Link to={routes.adminMenu.help}>help</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};
