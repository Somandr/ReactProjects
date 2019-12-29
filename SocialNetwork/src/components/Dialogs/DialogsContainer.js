import React from 'react';
import {
    updateNewMessageBodyCreator,
    sendMessageCreator,
} from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
    let state = props.store.getState().dialogsPage;

    // let dialogsElements = state.dialogsData.map(getDialog => (
    //     <DialogItem name={getDialog.name} id={getDialog.id} />
    // ));

    // let messagesElements = state.messagesData.map(getMessage => (
    //     <Message message={getMessage.message} id={getMessage.id} />
    // ));

    // let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = body => {
        // let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
};

export default DialogsContainer;
