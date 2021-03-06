import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage} from "../../Redux/messageReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps= (state) => {

    return {
        dialogState: state.messagesPage
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);