const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi', ownerId: 2},
        {id: 2, message: 'How are you?', ownerId: 2},
        {id: 3, message: 'Yo!', ownerId: 0}
    ],
    contacts: [
        {id: 1, name: 'Vasiliy', ava: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png'},
        {id: 2, name: 'Pavel', ava: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'},
        {
            id: 3,
            name: 'Vlad',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoZ_XuJ5OUEFVkpbHEfMTnZcvS3xBhtVMlTXsY5LWBuJDp2SR4&usqp=CAU'
        },
        {
            id: 4,
            name: 'Andrey',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF&usqp=CAU'
        }
    ],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newOutMessage,
                ownerId: 0
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };


        default:
            return state;
    }
};

export const sendMessage = (text) => ({
    type: SEND_MESSAGE,
    newOutMessage: text
});

export default messageReducer;