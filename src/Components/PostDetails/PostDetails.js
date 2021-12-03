import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './PostDetails.css';
import Comments from '../Comments/Comments';
import Header from '../Header/Header';

const PostDetails = () => {

    const { id } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => setPost(post))
    }, [id])

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);

    // eslint-disable-next-line eqeqeq
    const filteredComm = comments.filter(comm => comm.postId == id);
    console.log(filteredComm);

    return (
        <div>
            <Header />
            <div className='post-body'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2">
                            {post.body}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className='comment-container'>
                {
                    filteredComm.map(comment => <Comments data={comment} key={comment.id} />)
                }
            </div>
        </div>
    );
};

export default PostDetails;