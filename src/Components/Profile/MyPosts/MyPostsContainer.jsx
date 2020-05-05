import React from 'react';
import {addPost} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps= (state) => {

    return {
        posts: state.profilePage.posts
    }
};

export default connect(mapStateToProps, {addPost})(MyPosts);