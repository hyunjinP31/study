import React from 'react';
import { useBookDispatch } from '../BookContext';

const Booklists = ({id, writer, title, year, isOn}) => {
    const dispatch = useBookDispatch();
    const onToggle = ()=> dispatch({type:'TOGGLE', id:id})
    const onRemove = ()=> dispatch({type:'REMOVE', id:id})
    return (
        <li onClick={onToggle} className={isOn ? 'on': ''}>
            <span>{writer}</span>
            <span>{title}</span>
            <span>{year}</span>
            <span className='delete' onClick={onRemove}>X</span>
        </li>
    );
};

export default Booklists;