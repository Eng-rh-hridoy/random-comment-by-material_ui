import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Posts.css';
import { Link } from 'react-router-dom';

const Posts = (props) => {

    const { title, body, id } = props.post;
    return (
        <div className='posts-container'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`post/postDetails/${id}`}>
                        <Button size="small">See More</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Posts;