import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';
import Counter from './Counter.js';
import CounterF from './CounterF.js';
import EventPractice from './Event';
import EventF from './EventF';

function App() {
  const name = "리액트";
  return ( //JSX구문
  // * JSX에서 자바스크립트 표현식을 사용하려면 {}로 감싼다
  // * if문 대신 조건부 연산자 - 삼함연산자 사용
  <div  className='react'>
    {/* <MyComponentClass name="classGreen" age={30}>
      <h3>children</h3>
    </MyComponentClass>
    <MyComponentClass></MyComponentClass> */}
    {/* <Counter></Counter> */}
    {/* <CounterF></CounterF> */}
    {/* <EventPractice></EventPractice> */}
    <EventF></EventF>
    <h2>하이하이</h2>
    <input type="text"/>
  </div>
    
  );
  // return React.createElement("div",null,"Hello", React.createElement("b",null,"react")) //위의 코드를 렌더링 하면 이렇게 된다.
}

export default App;
