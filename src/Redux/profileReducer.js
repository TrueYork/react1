import {profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: '',
    profile: null,
    status: ''
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
            return {...state, profile: action.profile};

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };


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

export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
});

export const obtainProfileDataThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileByUserId(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
};

export const getProfileStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        });
    }
};

export const updateProfileStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
    }
};

export default profileReducer;