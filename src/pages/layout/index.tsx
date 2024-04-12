import { Outlet } from "react-router-dom";
import { Header, NavBar } from "../../components";

import "./style.scss";
import { useState } from "react";

export const Layout = () => {
    const [isActiveNav, setIsActiveNav] = useState<boolean>(true);

    return (
        <div className={isActiveNav ? "layout disableScreen" : "layout"}>
            <NavBar
                setIsActiveNav={setIsActiveNav}
                isActiveNav={isActiveNav}
            />

            {isActiveNav && (
                <div
                    onClick={() => setIsActiveNav(false)}
                    className="disable"
                />
            )}

            <div>
                <Header
                    setIsActiveNav={setIsActiveNav}
                    isActiveNav={isActiveNav}
                />
                <Outlet />
            </div>
        </div>
    );
};
