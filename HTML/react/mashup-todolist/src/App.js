import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/TodoTemplate';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';
import { TodoProvider } from './todoContext';

//글로벌 스타일을 추가하고 싶을 때
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    //TodoProvider가 감싸고 있는 모든 컴포넌트가 TodoProvider의 children이 된다.
    <TodoProvider>
        <GlobalStyle></GlobalStyle>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
