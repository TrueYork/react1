import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IN_PROGRESS_OPERATION = 'TOGGLE-IN-PROGRESS-OPERATION';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isOperationInProgress: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
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

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        usersAPI.getUserList(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

export const acceptUnfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleInProgressOperation(true, userId));
        usersAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(toggleInProgressOperation(false, userId));
        });
    }
};

export const acceptFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleInProgressOperation(true, userId));
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(toggleInProgressOperation(false, userId));
        });
    }
};

export default userReducer;