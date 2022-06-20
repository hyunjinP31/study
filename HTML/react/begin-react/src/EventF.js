import React, { useState } from 'react';

const EventF = () => {
    const [message, setMessage] = useState('');
    return (
        <div>
            <input type="text" name="message" placeholder="아무거나 입력하세요FF" onChange={(e)=>{
                setMessage(e.target.value);
            }}></input>
            <button onClick={()=>{
                console.log(message)
            }}>확인</button>
        </div>
    )
}
export default EventF;