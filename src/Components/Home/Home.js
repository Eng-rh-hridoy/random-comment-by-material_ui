import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => setPosts(posts))
    }, [])

    return (
        <div>
            <Header />
            {
                posts.map(post => <Posts  post={post} key={post.id} /> )
            }
        </div>
    );
};

export default Home;