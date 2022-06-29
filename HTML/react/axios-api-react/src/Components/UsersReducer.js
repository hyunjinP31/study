import React,{ useEffect, useReducer } from 'react';
import axios from 'axios';

//초깃값, reducer 함수
// loading, data, error
const initailState = {
    loding: false,
    data: null,
    error: null,
}
function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loding: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: null,
                data: null,
                error:action.error,
            };
        default:
            return state;
    }
}


const UsersReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, initailState);
    const fetchUsers = async()=>{
        dispatch({type: 'LOADING'});
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type:'SUCCESS',data:response.data})
        }
        catch(e){
            dispatch({type:'ERROR',error:e})
        }
    }
    useEffect(()=>{
        fetchUsers();
    },[])

    //초깃값을 다시 객체구조분해할당으로 변수를 받아온 것.
    //초깃값은 useReducer 함수에 들어간 그 초깃값이 맞음
    const { loading, data, error } = state;
    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러발생</div>;
    if(!data) return null;
    return (
        <div>
            <ul>
                {data.map(user=>(
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                )
                )}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </div>
    );
};

export default UsersReducer;