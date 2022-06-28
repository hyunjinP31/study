import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Users = () => {
    //상태관리
    //1. 요청의 결과
    //2. 로딩 상태
    //3. 에러
    const [ users, setUsers ] = useState(null);
    const [ loading, setLoding ] =useState(false);
    const [ error, setError] = useState(null);

    //async -> 함수를 비동기적으로 처리하도록 해줌
    const fetchUser = async()=>{
        //try -> 성공
        //carch -> 실패
        try {
            //요청이 시작할 때에는 error와 users를 초기화
            setError(null);
            setUsers(null);
            //loading 상태를 true로 변경
            setLoding(true);
            //요청한 데이터는 response.data 안에 담김
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        }
        catch(e){
            console.log(e)
            setError(e);
        }
        setLoding(false);
    }

    useEffect(()=>{
        //안에 적은 함수 바로 불러줌
        fetchUser();
    //렌더링 할 때마다가 아닌 처음 마운트 될 때 한 번만 실행되도록 빈 배열 넣어주기
    },[])
    if(loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if(!users) return null;
    return (
        <div>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                )
                )}
            </ul>
            <button onClick={fetchUser}>다시 불러오기</button>
        </div>
    );
};

export default Users;