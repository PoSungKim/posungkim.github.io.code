import React from 'react';
import axios from 'axios';
import useAsync from "./UseAsync";

// 기능별 Reducer를 사용하는 것이 아니라,
// 하나의 Reducer로 관련 기능들을 통합 관리하는 방식

async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    return response.data;
}

function Users() {
    const [state, refetch] = useAsync(getUsers, [], true);
    const {loading, data: users, error} = state;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>
    if (!users) return <button onClick={refetch}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
        </>
    )
}

export default Users;