import React from 'react';
import { useState, useRef } from 'react';

const EventInput = () => {
    const input = useRef();
    const [form, setForm] = useState({
        username: "",
        message: "",
    })
    const { username, message} = form;
    const onChange = (e)=>{
        const nextForm = {
            ...form, //기존의 form내용을 여기에 복사 (스프레드 구문. 배열 뿌려주듯이 객체도 뿌려줌)
            [e.target.name]: e.target.value //이벤트가 발생한 input의 value를 바꿔줌
        }
        const{name, value} = e.target; //위에거 축약(객체구조분해할당)
        setForm({
            ...form,
            [name]: value
        });
    }
    //버튼 클릭시 실행
    const onCLick = ()=>{
        console.log(`메세지는 ${message}이고 username은 ${username}이다.`)
        setForm({
            message: '',
            username: '',
        })
        input.current.focus();
    }
    const onKeyPress = (e)=>{
        if(e.key === 'Enter'){
            onCLick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="username" ref={input} value={username} onChange={onChange} onKeyPress={onKeyPress} />
            <input type="text" name="message" value={message} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onCLick}>확인</button>
        </div>
    );
};

export default EventInput;
