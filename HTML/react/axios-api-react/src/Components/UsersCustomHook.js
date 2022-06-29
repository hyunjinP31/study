import React, {useState} from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import User from './User'

//axios로 값을 받아서 해당 데이터를 return해주는 함수
async function getUsers(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); //해당 data를 불러오기까지 기다리기 위한 await
    return response.data;
}

const UsersCustomHook = () => {
    const [userId, setUserId] = useState(null);
    //useAsync는 state와 fetch 함수가 담긴 배열을 return 해주고 있음 그 배열을 다시 구조분해할당으로 변수로 받기
    const [state, refetch] = useAsync(getUsers,[], true); //useAsync의 인자로 getUsers(axios로 받은 데이터 값)와 빈배열(useEffect가 언제 리렌더링 될 지 결정해주는 감시대상) 넣어주기
    const { loading, data, error } = state;
    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러발생</div>;
    if(!data) return <button onClick={refetch}>불러오기</button>;
    return (
        <div>
            <ul>
                {data.map(user=>(
                    <li key={user.id} onClick={()=>setUserId(user.id)}>
                        {user.username} ({user.name})
                    </li>
                )
                )}
            </ul>
            {/* 처음엔 skip을 true로 줘서 함수가 시작하자 마자 return 되게 함.
            refetch == 실제로 데이터를 불러오는 함수를 버튼클릭때 실행되도록 이벤트 주기 */}
            <button onClick={refetch}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </div>
    );
};

export default UsersCustomHook;