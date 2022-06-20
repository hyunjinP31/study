import { Component } from "react";

class Counter extends Component {
    //컴포넌트 생성자 메서드
    //클래스형 컴포넌트에서 constructor를 작성시 필수로 super(props) 를 호출해야 함
    //리액트의 component 클래스가 지닌 생성자 함수를 호출
    // constructor(props){
    //     super(props); //필수 무조건 적어야 함
    //     this.state = { //state는 객체
    //         number: 0,
    //         fixedNumber: 0, //setState 해주지 않았기 때문에 값이 바뀌지 않음
    //     }
    // }
    //위에는 원구조, 밑은 생략을 거친 것.
    state = {
        number: 0,
        fixedNumber: 0,
    }
    render() {
        const { number, fixedNumber } = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={()=>{
                    this.setState({number: number+1},()=>{
                        console.log('setState가 호출되었습니다');
                    }) //setState() 리액트에서 제공해주는 메서드 state의 값을 변경해준다.
                }}> +1</button>
            </div>
        );
    }
}

export default Counter;