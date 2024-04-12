import { Burger } from "../../assets";
import "./style.scss";
interface IHeaderProps {
    setIsActiveNav: (value: boolean) => void;
    isActiveNav: boolean;
}
export const Header: React.FC<IHeaderProps> = ({
    setIsActiveNav,
    isActiveNav,
}) => {
    const handlerClick = () => {
        setIsActiveNav(!isActiveNav);
    };

    return (
        <header className="header">
            <h1>Hello Evano 👋🏼, </h1>

            <div
                className={!isActiveNav ? "burgerIcons" : "burgerOpacity"}
                onClick={handlerClick}
            >
                <Burger />
            </div>
        </header>
    );
};
