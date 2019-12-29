import React from 'react';
import {
    updateNewMessageBodyCreator,
    sendMessageCreator,
} from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(getDialog => (
        <DialogItem name={getDialog.name} id={getDialog.id} />
    ));

    let messagesElements = state.messagesData.map(getMessage => (
        <Message message={getMessage.message} id={getMessage.id} />
    ));

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
        // props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = e => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>{dialogsElements}</div>

            <div className={classes.messageItem}>{messagesElements}</div>
            <div>
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <div>
                    {' '}
                    <button onClick={onSendMessageClick}> Send </button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
