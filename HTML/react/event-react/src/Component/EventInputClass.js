import React, { Component } from 'react';

class EventInputClass extends Component {
    state = {
        message: '',
        username: '',
    }
    handleChange = (e)=>{
        this.setState({ //Input이 onChange될 때 setState로 message 값을 변경
            [e.target.name]: e.target.value //input이 여러개일 때 name으로 접근해서 각각의 input을 구별한다.
        })
    }
    handleClick = ()=>{
        console.log(`메세지는 ${this.state.message}이고 username은 ${this.state.username}이다.`);
        this.setState({
            message:'',
            username: '',
        })
    }
    //키를 누르면 실행되는 함수
    handleKeyPress = (e)=>{
        console.log('aaaaa');
       if(e.key === "Enter"){
        this.handleClick();
       }
    }
    render() {
        return ( //여기 안에서는 if 못 씀
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} onKeyPress={this.handleKeyPress} />
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}  onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventInputClass;