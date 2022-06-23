import React from 'react';
import styled from 'styled-components';
import Todoitem from './Todoitem';

const TodoListBlock = styled.div`
    padding: 20px 32px;
    overflow-y: auto;
    flex: 1;
`;

const TodoList = () => {
    return (
        <TodoListBlock>
            <Todoitem text="리액트 스타일 공부하기" done={true}/>
            <Todoitem text="캔버스 게임 만들기" done={true}/>
            <Todoitem text="리액트 state, props 공부하기" done={false}/>
        </TodoListBlock>
    );
};

export default TodoList;