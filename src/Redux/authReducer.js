import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {...state, ...action.data};

        default:
            return state;
    }
};

export const setAuthData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
        isAuth
    }
});

export const doAuthThunkCreator = () => async (dispatch) => {
    let response = await authAPI.getAuthData();
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data;
        dispatch(setAuthData(id, email, login, true))
    }
};

export const doLoginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(doAuthThunkCreator())
    } else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Common error";
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
};

export const doLogoutThunkCreator = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
};

export default authReducer;