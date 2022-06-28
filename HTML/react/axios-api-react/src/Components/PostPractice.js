import axios from 'axios';
import React, { useReducer, useEffect } from 'react';

const initailState = {
    loading: false,
    error: null,
    data: null,
}

function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                error: null,
                data: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                error: null,
                data: action.data,
            };
        case 'ERROR':
            return {
                loading: false,
                error: action.error,
                data: null,
            };
        default:
            return state;
    }
}


const PostPractice = () => {
    const [ state, dispatch ] = useReducer(reducer, initailState);
    const fetchpost = async()=>{
        dispatch({type:'LOADING'});
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({type:'SUCCESS', data:response.data});
        }
        catch(e){
            dispatch({type:'ERROR', error:e});
        }
    }
    useEffect(()=>{fetchpost()},[]);
    const { loading, error, data } = state;
    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러발생</div>;
    if (!data) return null;
    return (
        <div>
            <ul>
                    {
                        data.map(post=>(
                            //key -> 각각의 컴포넌트들을 구분할 수 있도록 지정해주는 것. map을 할 때에 필수적으로 들어가야 하는 공식 구문이다.
                            <li key={post.id}>
                                <span>userId : {post.userId}</span>
                                <span>Id : {post.Id}</span>
                                <span>title : {post.title} </span>
                            </li>
                        ))
                    }
            </ul>
            <button onClick={fetchpost}>다시불러오기</button>
        </div>
    );
};

export default PostPractice;