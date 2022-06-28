import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostState = () => {
    const [loading, setLoding] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const fetchpost = async()=>{
        //loding의 true는 try 밖에 있어도 되고 안에 있어도 된다. 다만 reducer는 모든 case마다 각 상태들을 한 번에 관리해주지만 (A case에서 a state는 이렇게... <-이런식)
        //state에서는 각각 관리해 주어야 하기 때문에 끝에서는 loading의 true를 false 로 바꿔줘야 한다.
        setLoding(true);
        try{
            setError(null);
            setData(null);
            //json 파일을 axios로 불러오는 구문. 잘 기억하자.
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            //response는 하나의 객체형태로 담기고 이 객체에는 실제로 우리가 쓸 데이터 뿐만이 아닌 여러가지 값들이 담겨온다.
            //그렇기에 실제 우리가 쓸 데이터가 담긴 key를 불러와야 한다. 이 때 우리가 쓸 데이터가 담긴 프로퍼티의 key는 data이다. response만 적으면 객체 전부를 불러오게 되니 주의!
            console.log(response)
            setData(response.data);
        }
        catch(e){
            setError(e);
        }
        setLoding(false);
    }
    //useEffrect마지막 값으로 빈 배열을 주었기 때문에 처음 한 번 마운트 될 때만 해당 구문이 실행된다. useEffect의 마지막 값은 useEffect가 감시하는 대상으로 해당 값이 바뀌면 마운트되는 것으로 본다.
    //빈 배열의 값은 바뀌지 않기에 처음 한 번을 마운트 하는 것으로 더이상 실행되지 않는다.
    useEffect(()=>{fetchpost()},[]);
    if(loading) return <div>로딩중...</div>;
    if (error) return <div>에러발생</div>
    if(!data) return null;
    return (
        <div>
            <ul>
                {
                    data.map(post=>(
                        
                        <li key={post.id}>
                            <span>userId : {post.userId}</span>
                            <span>id : {post.id}</span>
                            <span>title : {post.title}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PostState;