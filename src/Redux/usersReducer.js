import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../Utils/objectHelper";

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE-IS-FETCHING';
const TOGGLE_IN_PROGRESS_OPERATION = 'social-network/users/TOGGLE-IN-PROGRESS-OPERATION';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isOperationInProgress: [],
    fake: 10
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FAKE":
            return {...state, fake: state.fake + 1};

/*        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };*/

        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", {followed: true})
            };

/*        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };*/

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", {followed: false})
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IN_PROGRESS_OPERATION:
            return {
                ...state,
                isOperationInProgress: action.isOperationInProgress
                    ? [...state.isOperationInProgress, action.userId]
                    : state.isOperationInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};

export const follow = (userId) => ({
    type: FOLLOW,
    id: userId
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    id: userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
});

export const setCurrentPage = (curPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: curPage
});

export const setTotalUsersCount = (totalCnt) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalCnt
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
});

export const toggleInProgressOperation = (isOperationInProgress, userId) => ({
    type: TOGGLE_IN_PROGRESS_OPERATION,
    isOperationInProgress: isOperationInProgress,
    userId: userId
});

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let response = await usersAPI.getUserList(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
};

/*export const acceptUnfollowThunkCreator = (userId) => async (dispatch) => {
    dispatch(toggleInProgressOperation(true, userId));
    let response = await usersAPI.unfollowUser(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollow(userId));
    }
    dispatch(toggleInProgressOperation(false, userId));
};*/

export const acceptUnfollowThunkCreator = (userId) => (dispatch) => {
    acceptFollowUnfollowTemplateThunkCreator(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollow);
};

/*export const acceptFollowThunkCreator = (userId) => async (dispatch) => {
    dispatch(toggleInProgressOperation(true, userId));
    let response = await usersAPI.followUser(userId);
    if (response.data.resultCode === 0) {
        dispatch(follow(userId));
    }
    dispatch(toggleInProgressOperation(false, userId));
};*/

export const acceptFollowThunkCreator = (userId) => (dispatch) => {
    acceptFollowUnfollowTemplateThunkCreator(dispatch, userId, usersAPI.followUser.bind(usersAPI), follow);
};

export const acceptFollowUnfollowTemplateThunkCreator = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleInProgressOperation(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleInProgressOperation(false, userId));
};

export default userReducer;