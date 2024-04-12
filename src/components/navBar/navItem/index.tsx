import { Link, useLocation } from "react-router-dom";
import { Arrow } from "../../../assets";
import { routes } from "../../../constants/routes";
import { mockNavbar } from "../../../mocks/mock";

interface INavItemProps {
    to: string;
    Svg: React.FC;
    nameNavbar: string;
    setIsActiveNav: (value: boolean) => void;
}

export const NavItem: React.FC<INavItemProps> = ({
    to,
    Svg,
    nameNavbar,
    setIsActiveNav,
}) => {
    const { pathname } = useLocation();

    return (
        <>
            <li className="elements_list-items">
                <Link
                    to={to}
                    className={
                        pathname === to
                            ? "list_items-content list_items-active"
                            : "list_items-content "
                    }
                >
                    <Svg />
                    <span className="items_content-title">
                        <h3>{nameNavbar}</h3>
                        <Arrow />
                    </span>
                </Link>
            </li>
        </>
    );
};
