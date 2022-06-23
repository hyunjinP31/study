import React from 'react';
import classNames from 'classname';
import './Button.scss';

const Buttons = ({children, size, color, outline, fullWidth}) => {
    return (
        <div>
            {/* <button className={`button ${size}`}>{children}</button> */}
            <button className={classNames('button', size, color, { outline, fullWidth })}>{children}</button>
        </div>
    );
};

export default Buttons;