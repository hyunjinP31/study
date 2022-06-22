import './App.css';
import { useState, useRef } from 'react';
import TodoLists from './Components/TodoLists';
import CreateTodo from './Components/CreateTodo';

function App() {
  const [ list, setList ] = useState("");
  //input의 값을 입력할 때 (input의 value가 변경될 때)
  //state인 list값을 input의 value값으로 업데이트

  // const onChange = (newList)=>{ //인자로 받은 list로 list(위에거)를 업데이트 해주겠다.
  //   setList(newList); //setList 자체가 위에 구조분해할당으로 나눈 list의 값을 수정할 수 있는 함수이기 때문에 setList(인자로 받은 걸 넣어줌) <<을 해줌으로 해당 값으로 list(위에 거)가 변경되도록 하는 것이다. 
  //   console.log(list);
  // }
  //input자체를 인자로 넣었기 때문에 실제 실행될 컴포넌트에서는 input의 value를 찍어서 이 값이 변경될 거라는 것을 알려줘야 함.
  //onChange={(e)=> onChange(e.target.value)} --> 인풋자체를 인자로 넣어줄 때 실행되는 컴포넌트에서 넣어줘야 할 구문

  //얘는 아예 onChange라는 함수에 e를 찍어서 e.target의 value값을 받아왔기 때문에 실제 실행되는 컴포넌트에서는 onChange만 불러주면 된다.
  const onChange = (e)=>{ //아예 이벤트를 여기서 찍어줌으로써 실제 실행되는 컴포넌트에서는 onChange만 불러줌
    const { value } = e.target;
   setList( value );
  }

  

  //CreateTodo 컴포넌트에서 +버튼을 클릭하면 todos배열에 할일객체가 추가됨
  const onCreate = ()=>{
    //새로운 객체를 만들고
    const listobj = {
      id: nextId.current,
      list: list, //key : value고 key에 list는 string
      isDone : false,
    }
    //해당 객체를 todos배열에 새로 넣어준다.
    setTodos([...todos, listobj]);
    setList(""); //input값 비워주기
    nextId.current += 1;
  }
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      list: "해야할 일1",
      isDone : false,
    },
    {
      id: 2,
      list: "해야할 일2",
      isDone : false,
    },
    {
      id: 3,
      list: "해야할 일3",
      isDone : false,
    }
  ]);

  const nextId = useRef(todos.length + 1)

  //항목 삭제
  //삭제 클릭시 id값을 인수로 받아서 todos 배열에서 id값이 다른 객체만 업데이트
  const onDelete = (id)=>{
    setTodos(todos.filter(todo=>id !== todo.id))
  }

  const onToggle = (id)=>{
    setTodos(todos.map(todo=> id === todo.id ? {...todo, isDone: !todo.isDone} : todo) )
  }
  //todos라는 컴포넌트를 주는데 주는 값은 {todos}인 거.
  return (
    <div className="App">
      <CreateTodo list={list} onChange={onChange} onCreate={onCreate}></CreateTodo>
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle} ></TodoLists>
    </div>
  );
}

export default App;
