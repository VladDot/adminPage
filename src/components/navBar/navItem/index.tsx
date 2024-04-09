import { Link } from "react-router-dom";
import { Arrow } from "../../../assets";

interface INavItemProps {
    to: string;
    Svg: React.FC;
    nameNavbar: string;
}

export const NavItem: React.FC<INavItemProps> = ({ to, Svg, nameNavbar }) => {
    return (
        <>
            <li className="elements_list-items">
                <Link
                    to={to}
                    className="list_items-content "
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
