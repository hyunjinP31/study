import React from 'react';

const CreateTodo = ({list, onChange, onCreate}) => {
    return (
        <div className='header'>
            <h2>to do List</h2>
            <div>
                <input type="text" name="newList" value={list} onChange={onChange} />
                <button onClick={onCreate} >+</button>
            </div>
        </div>
    );
};

export default CreateTodo;