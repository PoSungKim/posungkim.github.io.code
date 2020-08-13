import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../_actions/userAction";

const UserContainer = () => {
    const users = useSelector(state => state.userReducer.data);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(getUsers());
    }

    console.log("render ");

    return (
        <>
            <h2>SpringBoot 연동 및 회원가입 시작</h2>
            <button onClick={onClick}>Get Users</button>
            <ul>
                {users && users.map(user => (<li key={user.id}>
                    {user.username} {user.password}
                </li>))}
            </ul>
        </>
    )
}

export default UserContainer;