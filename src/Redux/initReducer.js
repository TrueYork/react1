import {doAuthThunkCreator} from "./authReducer";

const SET_INITIALIZING = 'SET-INITIALIZING';

let initialState = {
    isInitializing: false
};

const initReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INITIALIZING:
            return {...state, isInitializing: true};

        default:
            return state;
    }
};

export const setInitializing = () => ({type: SET_INITIALIZING});

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
        let dispatchPromise = dispatch(doAuthThunkCreator());
        //debugger;
        dispatchPromise.then(() => {
            dispatch(setInitializing());
        });
    }
};

export default initReducer;