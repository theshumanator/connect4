import React from 'react';

function UserBox ({handleUsername, user1, user2}) {
    return (
        <div>
            <div>
                <label htmlFor="user1">User 1</label>
                <input onChange={handleUsername} type="text" id="user1"/>        <span aria-label="scared" role="img">😱</span>         
                <label htmlFor="user2">User 2</label>
                <input onChange={handleUsername}type="text" id="user2"/>
                <span aria-label="scary" role="img">👹</span>         
            </div>
            <div>
                <span>{user1}</span>   <span>{user2}</span>
            </div>
        </div>        
    );
}

export default UserBox;