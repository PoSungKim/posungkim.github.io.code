import React from "react";
import Users from "./UsersComp4";
import {UsersProvider} from "./UserContext";

function UserComp() {
    return (
        <UsersProvider>
            <Users>
            </Users>
        </UsersProvider>
    )
}

export default UserComp;