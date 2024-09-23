import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

// const Content = (isDark) => {
const Content = () => {
    const { isDark } = useContext(ThemeContext);
const user = useContext(UserContext);

    return (

        <div
            className="content"
            style={{
                backgroundColor: isDark ? "black" : "lightgrey",
                color: isDark ? "white" : "black",
            }}
        >
            <p>{user}좋은 하루 되세요</p>
        </div>
    );
};

export default Content;