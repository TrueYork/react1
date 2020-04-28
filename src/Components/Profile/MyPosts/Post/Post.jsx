import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png' alt='userPic' />
            {props.message}
            <div>
                <span>{props.likes}</span> like(s)
            </div>
        </div>
    );
}

export default Post;