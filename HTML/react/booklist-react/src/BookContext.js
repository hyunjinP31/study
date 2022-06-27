import React, { createContext, useReducer, useContext, useRef } from 'react';

const initailBooks = [
    {
        id: 1,
        writer: '강태공',
        title: '물고기를 잡는 법',
        year: '2021',
        isOn : false,
    },
    {
        id: 2,
        writer: 'NASA',
        title: 'you are made of star-stuff',
        year: '2020',
        isOn : false,
    },
    {
        id: 3,
        writer: '버스커버스커',
        title: '처음엔 사랑이란게',
        year: '2022',
        isOn : false,
    }
];

function BookReducer (state, action) {
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.book);
        case 'TOGGLE':
            return state.map(book=>
                book.id === action.id ? {...book, isOn: !book.isOn} : book);
        case 'REMOVE':
            return state.filter(book=>
                book.id !== action.id);
        default:
            return state;
    }
}

const BookStateContext = createContext();
const BookDispatchContext = createContext();
const BookNextIdContext = createContext();

export function BookProvider({children}){
    const nextId = useRef(initailBooks.length+1);
    const [state, dispatch] = useReducer(BookReducer, initailBooks);
    return(
        <BookStateContext.Provider value={state}>
            <BookDispatchContext.Provider value={dispatch}>
                <BookNextIdContext.Provider value={nextId}>
                    {children}
                </BookNextIdContext.Provider>
            </BookDispatchContext.Provider>
        </BookStateContext.Provider>
    );
}


export function useBookState(){
    return useContext(BookStateContext);
}
export function useBookDispatch(){
    return useContext(BookDispatchContext);
}
export function useBookNextId(){
    return useContext(BookNextIdContext);
}