import React, { Component } from 'react';

class RefInput extends Component {
    //ref 생성
    input = React.createRef();
    handleFocus = () =>{
        this.input.current.focus(); //this.input.current == 밑의 input에 ref= {this.input} 을 연결해주었기 때문에 해당 ref의 current는 해당 엘리멘츠를 불러온다.
        console.log(this.input.current.value) 
    }
    render() {
        return (
            <div>
                <input ref = {this.input} onChange={this.handleFocus} />
            </div>
        );
    }
}

export default RefInput;