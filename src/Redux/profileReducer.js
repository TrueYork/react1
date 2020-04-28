import {profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
};

export const addPost = () => ({
    type: ADD_POST
});

export const updateNewPostText = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
});

export const obtainProfileDataThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileByUserId(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
};

export default profileReducer;