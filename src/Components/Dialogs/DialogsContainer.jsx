import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageText} from "../../Redux/messageReducer";

const mapStateToProps= (state) => {

    return {
        dialogState: state.messagesPage
    }
};

export default connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);