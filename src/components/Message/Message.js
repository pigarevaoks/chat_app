import React from 'react';
import { StatusSensor, MessageStatusBar, Avatar } from 'components';
import classNames from 'classnames';
import styles from './Message.css';

class Message extends React.Component {

    render() {
        const { message, user, nextMessage, prevMessage } = this.props;

        
        const autorType = message.type === 'bot' ? 'bot' : message.autor_id === user.id ? 'recipient' : 'sender';
        const autorStyle = autorType === 'bot' ? styles.bot : autorType === 'recipient' ? styles.recipient : styles.sender;
        const isFailed = message.status === 'sending' || message.status === 'failed';
        const isSameTimePrevMessages = prevMessage && message && prevMessage.time === message.time;
        const isSameTimeNextMessages = nextMessage && message && nextMessage.time === message.time;
        const isSameTime = isSameTimeNextMessages || isSameTimePrevMessages;
        const isShowingStatusBar = autorType === 'sender' && message.status !== 'archived';
        const isShowingAvatar = autorType === 'recipient' && !isSameTimeNextMessages;

        return(
            <div className={classNames([styles.main, autorStyle, isSameTime ? styles.isSameTime : null])}>
                <div className={styles.container}>
                    {isShowingAvatar && <Avatar layout={styles.avatar} image={user.photo} alt="avatar" />}
                    <div className={styles.inner}>
                        {autorType === 'bot' && <StatusSensor size='big' status={message.status} />} 
                        <div className={styles.info}>
                            {isShowingStatusBar && <MessageStatusBar layout={styles.status} status={message.status} />} 
                            {!isFailed && !isSameTimeNextMessages && <span className={styles.time}>{message.time}</span>}
                        </div>
                        <span className={styles.text}>{message.text}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;