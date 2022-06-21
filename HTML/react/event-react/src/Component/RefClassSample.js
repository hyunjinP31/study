import React, { Component } from 'react';
import './RefSample.css'

class RefClassSample extends Component {
    input = React.createRef();
    state = {
        password: '',
        clicked: false,
        validated: false,
    }
    handleChange = (e)=>{
        this.setState({
            password: this.input.current.value,
        })
    }
    handleButtonClick = ()=>{
        //돔요소 접근은 ref.current
        this.input.current.focus();
        console.log(this.input);
        this.setState({
            clicked: true,
            validated: this.state.password === '0000', //해당 값이 맞으면 true 아니면 false가 담김
        })
    }
    render() {
        return (
            <div>
                {/* 선택하려는 DOM 요소의 ref속성으로 지정 */}
                <input
                    ref = {this.input}
                    type="password"
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure' ) : '' } //밖의 삼함연산자 값이 true일 때 두번째 삼항연산자를 발생시킨다.
                />
                <button  onClick={this.handleButtonClick}>확인</button>
            </div>
        );
    }
}

export default RefClassSample;