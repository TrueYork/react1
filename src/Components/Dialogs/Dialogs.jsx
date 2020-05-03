import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import {Element} from "../Common/FormControls/formControls";

const maxLength100 = maxLengthCreator(100);

const TextArea = Element("textarea");

class Dialogs extends React.Component {

    render() {
        let сontactListHtml = this.props.dialogState.contacts.map((contact) =>
            <DialogItem name={contact.name} key={contact.id} id={contact.id} ava={contact.ava}/>
        );

        let messageListHtml = this.props.dialogState.messages.map((message) =>
            <Message sender={message.ownerId} message={message.message} key={message.id}/>
        );

        const addMessage = (values) => {
            this.props.sendMessage(values.text)
        };

        return (
            <div className={classes.dialogs}>

                <div className={classes.dialogsItems}>
                    {сontactListHtml}
                </div>
                <div className={classes.messages}>
                    {messageListHtml}
                </div>
                <div>

                </div>
                <div>
                    <AddMessageFormRedux onSubmit={addMessage}/>
                </div>
            </div>
        );

    }
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} validate={[required, maxLength100]} name={"text"} placeholder={"Type a message here."}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);

export default Dialogs;