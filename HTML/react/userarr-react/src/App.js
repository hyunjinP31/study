
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
        email: 'green@gmail.com'
    },
    {
        id:2,
        username: 'blue',
        email: 'blue@gmail.com'
    },
    {
        id:3,
        username: 'yellow',
        email: 'yellow@gmail.com'
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
  }
  setUsers([...users,user]); //배열에 담긴 값을 펼쳐줌. -> 그 뒤에 내가 원하는 값을 추가로 적어서 넣어주는 것.
  setInputs({
    username:"",
    email: "",
  })
  nextId.current += 1; //ref는 항상 current로 접근

}
  return (
    <div className="App">
        <CreateUser email={email} username= {username} onChange={onChange} onCreate={onCreate}></CreateUser>
        <UserList users={users}/> 
    </div>
  );
}

export default App;
