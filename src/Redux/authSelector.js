export const getUserId = (state) => {
    return state.auth.userId;
};

export const getEmail = (state) => {
    return state.auth.email;
};

export const getLogin = (state) => {
    return state.auth.login;
};

export const getIsFetching = (state) => {
    return state.auth.isFetching;
};

export const getIsAuth = (state) => {
    return state.auth.isAuth;
};

export const getCaptchaURL = (state) => {
    return state.auth.captchaURL;
};