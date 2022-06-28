import React, { createContext, useContext, useReducer, useRef} from 'react';

const initailState = {
    total: [
        {
            id: 1,
            text: "리액트 공부하기",
            done: false,
        },
        {
            id: 2,
            text: "리액트 노트 정리하기",
            done: false,
        },
        {
            id: 3,
            text: "생일선물 사기",
            done: true,
        }
    ],
    filterList: [
        {
            id: 1,
            text: "리액트 공부하기",
            done: false,
        },
        {
            id: 2,
            text: "리액트 노트 정리하기",
            done: false,
        },
        {
            id: 3,
            text: "생일선물 사기",
            done: true,
        }
    ],
}

function TodoReducer(state, action){
    switch(action.type){
        //create는 total에 해야함. 원본 배열에 추가해야 계속 불러올 수 있기 때문. filter는 case에 따라 계속 바뀌는 값이기 때문에 새로운 값을 추가하는 건 원본 배열에 해주면 됨!
        case 'CREATE':
            return {
                ...state,
                total: state.total.concat(action.todo)
            };
        case 'TOGGLE':
            return {
                ...state,
                filter: state.total.map(todo=>todo.id===action.id ? {...todo, done : !action.done} : todo)
            };
        case 'REMOVE':
            return {
                total: state.total.filter(todo=>todo.id !== action.id),
                filterList: state.filterList.filter(todo=>todo.id !== action.id),
            };
        case 'TOTAL':
            return {
                ...state,
                filterList : state.total,
            }
        default:
            return state;
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoContext({children}){
    const nextId = useRef(initailState.total.length + 1);
    const [state, dispatch] = useReducer(TodoReducer, initailState);
    console.log(state);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
};

export function useTodoState(){
    return useContext(TodoStateContext);
}
export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}
export function useTodoNextId(){
    return useContext(TodoNextIdContext);
}