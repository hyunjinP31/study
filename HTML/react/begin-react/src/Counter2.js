import React,{useReducer, useContext} from 'react';
import { MyContext } from './Components/MyContext'

//이 함수의 state는 밑에 변수로 부른 useReducer의 number 상태가 들어가고 해당 상태의 초기값은 0으로 미리 지정해준 상태
//useReducer을 하게 되면 거기에 들어가는 함수에 자동으로 변수 두개가 들어간다. (그걸 받기 위해 함수는 인자를 두 개 무조건 받아야 함..?)
//첫 번째 인자에는 useReducer 안의 상태가, 두 번째 인자로는 useReducer가 가지고 있는 객체 action(dispatch에서 넣어준 객체! 얘가 들어가는 거임!!!! 객체가 있는 게 아니라 dispatch에서 만들어 준 애를 넣어주는 거)이 들어가게 되고 해당 객체는 type이라는 key를 가진다.(사용자가 지정하면 됨)
//switch문(조건문)을 써서 해당 type의 value가 무엇인지 확인해서 value에 맞는 실행문을 return시킨다.



function reducer(state, action){
    switch(action.type){
        case "INCREASE":
            return state+1;
        case "DECREASE":
            return state-1;
        default:
            return state;
    }
}

const Counter2 = () => {
    const contextText = useContext(MyContext);
    console.log(contextText);
    //이렇게 useReducer를 불러주면 실행은 dispatch로 한다.
    //dispatch를 함수로 감싸서 각각 함수를 실행시킬 때 type의 value를 알맞게 주고 해당 value를 dispatch가 실제로 실행시키는 함수에서 switch문으로 확인해서 value에 알맞는 실행문을 찾아 실행시킨다.
    const [number, dispatch] = useReducer(reducer,0);
    //무슨 함수를 실행시킬건지에 따라 type의 값이 다르게 들어감.
    function Increase(){
        dispatch({type:"INCREASE"}); //dispatch를 부름 == 위의 함수 reducer를 실행시킴
    }
    function Decrease(){
        dispatch({type:"DECREASE"});
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={Decrease}>-1</button>
            <button onClick={Increase}>+1</button>
        </div>
    );
};

export default Counter2;