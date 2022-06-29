import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

//주소창 마지막에 userId 넘버를 붙여주면 해당 넘버와 동일한 객체의 데이터만 불러오게 됨.
//id를 받아서 주소창에 뿌려주면 해당 주소로 이동할 수 있음
async function getUser(id){
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

const User = ({id}) => {
    //부모 컴포넌트에서 userId 받아옴.
    //callback()은 함수만 들어가야 하기 때문에 인자가 있는 함수를 받을 때는 함수를 한 번 감싸주어야 함
    const [state,] = useAsync(()=>getUser(id),[id]); //useAsync의 인자로 getUsers(axios로 받은 데이터 값)와 배열(useEffect가 언제 리렌더링 될 지 결정해주는 감시대상) 넣어주기
    const { loading, data, error } = state;
    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러발생</div>;
    if(!data) return null;
    return (
        <div>
            <h2>{data.username}</h2>
            <p>
                Email : { data.email}
            </p>
        </div>
    );
};

export default User;