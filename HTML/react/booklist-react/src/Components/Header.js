import React, { useState } from 'react';
import { useBookDispatch } from '../BookContext';

const Header = () => {
    const dispatch = useBookDispatch();
    const [open, setOpen] = useState(false);
    const onChange = e=>{
        const {name, value} = e.target;
    }
    const onClick = ()=>{
        setOpen(!open)
    }
    return (
        <div className='header'>
            <h2>BOOKLIST</h2>
            <ul>
                <li value='2022'>2022년도</li>
                <li value='2021'>2021년도</li>
                <li value='2020'>2020년도</li>
                <li value='2019'>2019년도</li>
                <li onClick={onClick}>도서등록</li>
                {open && (
                    <div className='blackBg'>
                        <span className='close' onClick={onClick}>X</span>
                        <div className='whiteBox'>
                            <div><span>저자 : </span><input type='text' name='writer'/></div>
                            <div><span>제목 : </span><input type='text' name='title'/></div>
                            <div><span>출간일 : </span><input type='text' name='year'/></div>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Header;