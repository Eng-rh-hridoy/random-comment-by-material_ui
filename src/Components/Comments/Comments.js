import React, { useEffect, useState } from 'react';
import './Comments.css';

const Comments = (props) => {
    const { body } = props.data;

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    console.log(user);
    return (
        <div className='comment-wrapper'>
            <div className='comment-user'>
                <img src={user.avatar} alt="user" />
                <h5>{user.username}</h5>
            </div>
            <div className='comment-body'>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comments;