import React, {useEffect, useReducer} from 'react';
import userReducer from "./UserReducer";
import axios from 'axios';

// useReducer를 통한 axios 활용

function Users() {

    const [state, dispatch] = useReducer(userReducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchUsers = async () => {
        dispatch({type: 'LOADING'});
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
            dispatch({type: 'SUCCESS', data: response.data});
        } catch (error) {
            dispatch({type: 'ERROR', error: error});
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const {loading, data: users, error} = state;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>
    if (!users) return null;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    )
}

export default Users;