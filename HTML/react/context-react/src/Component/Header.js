import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Header = ( ) => {
    const {isDark} = useContext(ThemeContext);

    return (
        <div className={ isDark ? 'header dark' : 'header'}>
            <h1>Green</h1>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
                <li>menu4</li>
            </ul>
        </div>
    );
};

export default Header;