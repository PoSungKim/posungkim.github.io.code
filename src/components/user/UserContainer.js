import React, {useCallback, useEffect, useMemo, useState} from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080/users";
const TEST_URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((users) => {
                console.log(users);
                setUsers(users);
            });
    }, []);

    console.log("render ");

    return (
        <>
            <h2>SpringBoot 연동 및 회원가입 시작</h2>
            <p>{BASE_URL}</p>
            <ul>
                {users && users.map(user => (<li key={user.id}>
                    {user.username} {user.password}
                </li>))}
            </ul>
        </>
    )
}

export default UserContainer;