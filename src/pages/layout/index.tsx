import { Outlet } from "react-router-dom";
import { Header, NavBar } from "../../components";

import "./style.scss";

export const Layout = () => {
    return (
        <div className="content">
            <NavBar />
            <div>
                <Header />
                <Outlet />
            </div>
        </div>
    );
};
