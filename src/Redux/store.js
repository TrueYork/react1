import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

let storage ={
    _subscriber() {
        console.log('no subscribers (observers)')
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you', likesCount: 12},
                {id: 2, post: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi', ownerId: 2},
                {id: 2, message: 'How are you?', ownerId: 2},
                {id: 3, message: 'Yo!', ownerId: 0}
            ],
            contacts: [
                {id: 1, name: 'Vasiliy', ava: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png'},
                {id: 2, name: 'Pavel', ava: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'},
                {id: 3, name: 'Vlad', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoZ_XuJ5OUEFVkpbHEfMTnZcvS3xBhtVMlTXsY5LWBuJDp2SR4&usqp=CAU'},
                {id: 4, name: 'Andrey', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF&usqp=CAU'}
            ],
            newOutMessage: ''
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._subscriber(this);
    }
};

export default storage;