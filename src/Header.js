import React from "react";
import { UserContext } from "./App";

export default function Header() {
    const currentUser = React.useContext(UserContext);

    return (
        <div>
            <p>welcome, {currentUser} !</p>
        </div>
    );
}