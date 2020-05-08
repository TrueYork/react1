import React, {PureComponent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Element} from "../../Common/FormControls/formControls";

const maxLength10 = maxLengthCreator(10);

const TextArea = Element("textarea");

class MyPosts extends PureComponent {
    render() {
        //console.log("MyPost render");
        let postDataHtml = this.props.posts.map((post) =>
            <Post message={post.post} key={post.id} likes={post.likesCount}/>
        );

        const addPost = (values) => {
            this.props.addPost(values.text)
        };

        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={addPost}/>
                <div className={classes.posts}>
                    {postDataHtml}
                </div>
            </div>
        );
    }
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"text"} placeholder={"What's new?"} component={TextArea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({
    form: "addNewPostForm"
})(AddNewPostForm);

export default MyPosts;