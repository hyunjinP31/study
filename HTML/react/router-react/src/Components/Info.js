import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Info1 from './Info1';
import Info2 from './Info2';

const Info = () => {
    return (
        <div>
              정보 페이지 입니다.
              <div>
                <Link to="info1">정보1</Link><br />
                <Link to="info2">정보2</Link>
              </div>
              <Routes>
                <Route path="info1" element={<Info1 />} />
                <Route path="info2" element={<Info2 />} />
              </Routes>
        </div>
    );
};

export default Info;    