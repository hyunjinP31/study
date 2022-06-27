import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Content = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={isDark ? 'content dark' : 'content'}>
            좋은 하루 되세요
        </div>
    );
};

export default Content;