import React, { createContext, useReducer, useContext, useRef } from 'react';

const initailTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done : true,
    },
    {
        id: 2,
        text: 'Context 만들기',
        done : false,
    },
    {
        id: 3,
        text: '컴포넌트 스타일링 하기',
        done : false,
    },
    {
        id: 4,
        text: '기능 구현하기',
        done : false,
    },
]

function todoReducer(state, action){
    switch(action.type) {
        //action type이 CREATE면 action객체의 todo를 state 배열에 추가
        case 'CREATE':
            return state.concat(action.todo);
        //action type이 TOGGLE이면 action객체의 id를 받아와서 state항목의 id와 일치하면 해당 항목의 done을 반전(true면 false로, false면 true로)
        case 'TOGGLE':
            return state.map(todo=>
                todo.id === action.id ? {...todo, done: !todo.done} : todo);
        //action type이 REMOVE이면 action객체의 id를 state배열 항목의 id와 비교하며 일치하지 않는 항목만 새배열로 반환
        case 'REMOVE':
            return state.filter(todo=> action.id !== todo.id);
        default:
            return state;
    }
}
//Context 만들기
const TodoStateContext = createContext(); 
const TododispatchContext = createContext();
const TodoNextIdContext = createContext();


export function TodoProvider ({children}){
    const nextId = useRef(5);
    //reducer 함수 구조분해 할당.
    const [state, dispatch ] = useReducer(todoReducer, initailTodos);
    return (
        //구조분해할당으로 받은 값들을 Context의 값으로 넣어줌
        <TodoStateContext.Provider value={state}>
            <TododispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children};
                </TodoNextIdContext.Provider>
            </TododispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

//커스텀 Hook
//해당 함수를 실행시키면 따로 다른 컴포넌트에서 useContext를 할 필요 없도록 Context를 만든 자리에서 useContext를 바로 함수에 담아 함수를 export 해준다.
//이렇게 하면 해당 context를 쓸 컴포넌트에서 바로 해당 함수만 import 받아서 쓰면 된다.
export function useTodoState(){
    return useContext(TodoStateContext);
}
export function useTodoDispatch(){
    return useContext(TododispatchContext);
}
export function useTodoNextId(){
    return useContext(TodoNextIdContext);
} 