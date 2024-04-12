import { useState } from "react";
import adminAvatar from "../../assets/img/adminAvatar.png";
import { mockNavbar } from "../../mocks/mock";
import { Logo } from "../logo";

import { NavItem } from "./navItem";
import "./style.scss";

interface INavBarProps {
    setIsActiveNav: (value: boolean) => void;
    isActiveNav: boolean;
}

export const NavBar: React.FC<INavBarProps> = ({
    setIsActiveNav,
    isActiveNav,
}) => {
    const handlerClick = () => {
        setIsActiveNav(false);
    };
    return (
        <>
            <nav className={isActiveNav ? "navPlanshet" : "closeNav"}>
                <div
                    className="close-container"
                    onClick={handlerClick}
                >
                    <span className="close"></span>
                </div>

                <div className="nav-content">
                    <div className="nav_content-elements">
                        <Logo />
                        <ul className="content_elements-list ">
                            {mockNavbar.map(
                                ({ to, nameNavbar, id, icon }, idx) => (
                                    <NavItem
                                        setIsActiveNav={setIsActiveNav}
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
