import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class Dialogs extends React.Component {

    render() {
        let сontactListHtml = this.props.dialogState.contacts.map((contact) =>
            <DialogItem name={contact.name} key={contact.id} id={contact.id} ava={contact.ava}/>
        );

        let messageListHtml = this.props.dialogState.messages.map((message) =>
            <Message sender={message.ownerId} message={message.message} key={message.id}/>
        );

        let newMessageElement = React.createRef();

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
                <textarea ref={newMessageElement} onChange={() => {
                    let text = newMessageElement.current.value;
                    this.props.updateNewMessageText(text);
                }} value={this.props.dialogState.newOutMessage}
                          placeholder={"Type a message here."}/>
                </div>
                <div>

                </div>
                <div>
                    <button onClick={() => {
                        this.props.sendMessage();
                    }}>Send
                    </button>
                </div>
            </div>
        );

    }
}

export default Dialogs;