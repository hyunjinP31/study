import React from 'react';
import { useTodoDispatch } from '../Context/TodoContext';

const Header = () => {
    const dispatch = useTodoDispatch();
    const onClick = ()=>{
        dispatch({type: 'TOTAL'})
    }
    //화면에 실질적으로 리스트를 뿌려주는 것은 TodoList~TodoItem(사실 TodoItem이 각각의 리스트를 받아와 뿌리는 게 맞고 TdoList는 뿌릴 값을 보내주는 컴포넌트에 불과)
    //TodoList의 역할 -> 전체적인 Content Div의 역할. 몸통 그 자체임
    //TodoItem의 역할 -> 실질적인 각각의 List를 뿌리는 역할. 값을 하나하나 받아와서 뿌려주는 컴포넌트이다.
    //html로 비유하자면 TodoList -> Content클래스 div, TodoItem -> 그 div 안의 요소.
    return (
        <div>
            <h2 onClick={onClick}></h2>
            <ul>
                <li>To do</li>
                <li>Done</li>
            </ul>
        </div>
    );
};

export default Header;