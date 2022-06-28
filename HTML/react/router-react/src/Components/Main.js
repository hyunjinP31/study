import React from 'react';
import { Link } from 'react-router-dom';

const main = () => {
    return (
        <div>
            메인페이지 입니다.
            <ul>
                <li><Link to="/product/1/shoe?search=productName&q=demo#text">1번상품</Link></li>
                <li><Link to="/product/2/rabtop?search=greengreen&q=demo#abc">2번상품</Link></li>
            </ul>
        </div>
    );
};

export default main;