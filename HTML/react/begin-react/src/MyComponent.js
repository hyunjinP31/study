import React from 'react';

// const MyComponent = ({name, age}) => { //구조분해할당으로 PROPS로 받지 않고 바로 변수명으로 받은 것
//     return (
//         <div>
//             안녕하세요 제 이름은 {name} 입니다.<br/>
//             제 나이는 {age} 입니다.
//         </div>
//     );
// };
const MyComponent = (props) => { //구조분해할당의 작동 원리
    const {name, age, children} = props;
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다.<br/>
            제 나이는 {age} 입니다.<br/>
            {children}입니다.
        </div>
    );
};

// props 기본값 설정
MyComponent.defaultProps = {
    name: "기본이름",
    age: 1,
}

export default MyComponent;