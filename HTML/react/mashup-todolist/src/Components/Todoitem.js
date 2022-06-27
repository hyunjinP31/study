import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../todoContext';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px
    cursor: pointer;
    &:hover{
        color:ff6b6b;
    }
    display:none;
`;
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
    &:hover{
        ${Remove}{
            display: initial;
        }
    }
`;
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => //밑에서 done props를 받아오고 있기 때문에 여기서 props를 써서 true, false를 체크할 수 있다.
        props.done &&
        css `
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `
    }
`;

const Text = styled.div`
    flex:1;
    font-size: 21px;
    color: #495057;
    ${props=>
        props.done &&
        css `
            text-decoration: line-through;
            color: #ced4da;
        `
    }
`;

const Todoitem = ({id, done, text}) => {
    const dispatch = useTodoDispatch();
    //항목 클릭했을 때 실행
    const onToggle = ()=> dispatch({type:'TOGGLE', id:id});
    const onRemove = ()=> dispatch({type:'REMOVE', id:id})
    //여기서 지금 넘겨준 props들은 위의 styled에서 받아서 조건문을 생성할 때 쓰인다.
    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
};

export default Todoitem;