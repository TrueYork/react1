import React from 'react';
import classes from '../Dialogs.module.css';

class Message extends React.Component {
    render() {
        if (this.props.sender === 0) {
            return (
                <div className={classes.messageOut}>
                    <span>{this.props.sender}</span>
                    <p>{this.props.message}</p>
                </div>
            );
        } else {
            return (
                <div className={classes.messageIn}>
                    <span>{this.props.sender}</span>
                    <p>{this.props.message}</p>
                </div>
            );
        }
    }
}

export default Message;