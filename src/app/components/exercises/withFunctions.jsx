import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunction = (Component) => (props) => {
    const tmp = localStorage.getItem("user") !== null;
    const [isAuth, setIsAuth] = useState(tmp);
    const handleLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };
    const handleLogIn = () => {
        const user = prompt("Пользователь: ");
        localStorage.setItem("user", user.trim());
        setIsAuth(true);
    };
    return (
        <CardWrapper>
            {isAuth ? (
                <Component
                    {...props}
                    title="Выйти из системы"
                    func={handleLogOut}
                ></Component>
            ) : (
                <Component
                    {...props}
                    title="Войти"
                    func={handleLogIn}
                ></Component>
            )}
        </CardWrapper>
    );
};

export default withFunction;
