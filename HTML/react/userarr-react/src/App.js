
import './App.css';
import UserList from './Component/UserList';
import { useState, useRef } from 'react';
import CreateUser from './Component/CreateUser';

function App() {
  //CreateUser의 입력 인룻을 상태관리
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  })

  const onChange = (e)=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  const { username, email } = inputs;

  //useState() 실행 -> 배열 return
  //arr[0] = 상태
  //arr[1] = 상태를 변경해주는 함수
  //const users = arr[0] 이걸 구조분해할당한 것이 밑에 거
  //const setUsers = arr[1]
  
  const [ users, setUsers ] = useState([
    {
        id:1,
        username: 'green',
        email: 'green@gmail.com',
        active: false,
    },
    {
        id:2,
        username: 'blue',
        email: 'blue@gmail.com',
        active: false,
    },
    {
        id:3,
        username: 'yellow',
        email: 'yellow@gmail.com',
        active: false,
    }
])
const nextId = useRef(4);
//배열에 새로운 항목을 추가
//users배열에 새로운 user객체를 추가
const onCreate = ()=>{
  //새로운 user객체 생성
  const user = {
    id: nextId.current,
    username, //키와 value의 이름이 같기 때문에 생략해서 하나만 적는다
    email,
    active: false,
  }
  setUsers([...users,user]); //배열에 담긴 값을 펼쳐줌. -> 그 뒤에 내가 원하는 값을 추가로 적어서 넣어주는 것.
  setInputs({
    username:"",
    email: "",
  })
  nextId.current += 1; //ref는 항상 current로 접근
  console.log(users);
}
//users배열에 해당 id는 삭제
//filter -> 해당하는 id와 user객체의 id가 다른 객체만 새 배열로 반환
const onDelete = (id)=>{ //이 때 id는 인자로 실제로 쓸 때 거기서 값을 받아올 거다.
  setUsers(users.filter(user=> id !== user.id))
}
const onToggle = (id)=>{ //이 때 id는 인자로 실제로 쓸 때 거기서 값을 받아올 거다.
  //배열 메서드 map
   //user.id와 받아온 id가 일치하면 user객체를 수정하는데 active값만 수정하기 위해 스프레드 구문을 사용했다. active값을 !user.active를 해줌으로 현재 값과 반대되는 값을 넣어준다. 아니라면 원래 user 그대로 넣어준다는 구문이다.
   //true 쪽의 중괄호는 객체의 중괄호
  setUsers(users.map(user=> id=== user.id ? {...user, active: !user.active} : user))
}


//자식요소에서 부모 요소에 있는 함수를 실행시키기 위해 전달해주는 것이 props

  return (
    <div className="App">
        <CreateUser email={email} username= {username} onChange={onChange} onCreate={onCreate}></CreateUser>
        <UserList users={users} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
