import React, {useState} from 'react';
import styled,{css} from 'styled-components';
import {MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    color: #fff;
    border: none;
    transition: 0.3s;
    ${
        props=>
            props.open &&
            css`
                background: #ff6b6b;
                &:hover{
                    background: #ff8787;
                }
                transform: translate(-50%, 50%) rotate(45deg);
            `
    }
`;
const InsertForm = styled.form`
    background: #f8f0fa;
    padding: 32px 32px 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef; 
`;
const Input = styled.input`
    padding: 14px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

const TodoCreate = () => {
    const [open, setOpen] = useState(false);
    const onToggle = ()=> setOpen(!open);
    return (
        <> {open && (
                <InsertForm>
                    <Input placeholder='할 일을 입력한 후 Enter 누르세요' />
                </InsertForm>
            )}
            <CircleButton open={open} onClick={onToggle}>
                <MdAdd />
            </CircleButton>
            
            
        </>
    );
};



export default TodoCreate;