import React from 'react';

const User = ({user})=>{

    return (
        <div>
            유저네임 : {user.username}
            <span>이메일 : {user.email}</span>
        </div>
    )
}

const UserList = ({users}) => { //App 에서 보내준 props
    return (
        <div>
            {users.map(user=>(<User user={user} key={user.id}/>))}
        </div>
    );
};

export default UserList;