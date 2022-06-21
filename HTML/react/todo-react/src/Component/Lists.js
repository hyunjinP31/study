import React from 'react';

const Lists = ({list}) => {
    return (
        <ul>
            <li>
                <input type="checkbox" />
                <span>{list.listInput}</span>
                <span>X</span>
            </li>
        </ul>
    );
};

const listPorps = ({lists})=>{
    return (
        <>
            {lists.map(list=>{<Lists list={list}/>})}
        </>
    )
}

export default listPorps;