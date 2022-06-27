import React from 'react';
import { useBookState } from '../BookContext';
import Booklists from './Booklists';

const Content = () => {
    const Books = useBookState();
    return (
        <div className='content'>
            <ul>
                <li className='em'>
                    <span>글쓴이</span>
                    <span>제목</span>
                    <span>년도</span>
                </li>
                    {Books.map(book=>
                        <Booklists
                            key={book.id}
                            id={book.id}
                            writer={book.writer}
                            title={book.title}
                            year={book.year}
                            isOn={book.isOn}
                        />
                    )}
            </ul>
        </div>
    );
};

export default Content;