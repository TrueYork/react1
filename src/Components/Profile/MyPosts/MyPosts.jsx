import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
    render() {
        let postDataHtml = this.props.profileState.posts.map((post) =>
            <Post message={post.post} key={post.id} likes={post.likesCount}/>
        );

        let newPostElement = React.createRef();

        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea ref={newPostElement} onChange={() => {
                        let text = newPostElement.current.value;
                        this.props.updateNewPostText(text);
                    }} value={this.props.profileState.newPostText}
                              placeholder={"What's new?"}/>
                    </div>
                    <div>
                        <button onClick={() => {
                            this.props.addPost();
                        }}>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postDataHtml}
                </div>
            </div>
        );
    }
}

export default MyPosts;