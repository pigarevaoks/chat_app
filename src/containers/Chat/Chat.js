import React from 'react';
import { connect } from 'react-redux';
import { Tabs, ChatBlock } from 'components';
import { change, addMessage, deleteMessage } from 'actions/chatActions';
import styles from './Chat.css';

class Chat extends React.Component {
    render() {
        const { onChange, addMessage, deleteMessage, value, chat, profile } = this.props;

        return (
            <div className={styles.container}>
                <Tabs layout={styles.tabs} />
                <ChatBlock 
                    chat={chat}
                    value={value}
                    profile={profile}
                    onChange={onChange}
                    addMessage={addMessage}
                    deleteMessage={deleteMessage}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        value: state.chat.inputValue,
        chat: state.chat.chat,
        profile: state.chat.profile,
    }),
    dispatch => ({
        onChange: item => dispatch(change(item)),
        addMessage: (message, date) => dispatch(addMessage(message, date)),
        deleteMessage: index => dispatch(deleteMessage(index)),
    })
)(Chat);
