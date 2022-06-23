import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/TodoTemplate';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';

//글로벌 스타일을 추가하고 싶을 때
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
        </TodoTemplate>
    </>
  );
}

export default App;
