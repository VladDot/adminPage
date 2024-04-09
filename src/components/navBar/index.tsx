import { Link } from "react-router-dom";
import { mockNavbar } from "../../mocks/mock";
import adminAvatar from "../../assets/img/adminAvatar.png";
import "./style.scss";
import { NavItem } from "./navItem";
import { Logo } from "../logo";

export const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <div className="nav_content-elements">
                        <Logo />
                        <ul className="content_elements-list ">
                            {mockNavbar.map(
                                ({ to, nameNavbar, id, icon }, idx) => (
                                    <NavItem
                                        key={`${id}_${idx}`}
                                        to={to}
                                        nameNavbar={nameNavbar}
                                        Svg={icon}
                                    />
                                )
                            )}
                        </ul>
                    </div>
                    <div className="nav_content-admin">
                        <img
                            src={adminAvatar}
                            alt=""
                        />
                        <span>
                            <h4>Evano</h4>
                            <h5>Project Manager</h5>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
};
