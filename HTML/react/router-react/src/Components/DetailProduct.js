import React from 'react';
import { Outlet } from 'react-router-dom';

const DetailProduct = () => {
    return (
        <div>
            상품 자세히보기 입니다.
            <Outlet />
        </div>
    );
};

export default DetailProduct;