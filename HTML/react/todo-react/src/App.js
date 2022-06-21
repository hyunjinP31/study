import logo from './logo.svg';
import './App.css';
import CreateNewList from './Component/CreateNewList';
import { useRef, useState} from 'react';
import Lists from './Component/Lists';

function App() {
  const [input, setInput] = useState({ //첫 번째 값 == useState(초기값)에 넣어준 초기값, 두 번째 값 == 첫 번째 값의 상태를 조정하는 함수
    listInput: "",
  })
  const onChange = (e)=>{
    const {name, value} = e.target
    setInput({
      ...input,
      [name]: value,
    })
  }
  const { listInput } = input;

  const [lists, setlists] = useState([]);
  const onCreate = ()=>{
    const list = {
      listInput,
    }
    setlists([...lists, list])
  }
  return (
    <div className="App">
      <CreateNewList listInput={listInput} onChange={onChange} onCreate={onCreate}></CreateNewList>
      <Lists lists={lists}></Lists>
    </div>
  );
}

export default App;
