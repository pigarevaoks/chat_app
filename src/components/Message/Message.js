import React from 'react';
import { StatusSensor, MessageStatusBar, Avatar } from 'components';
import classNames from 'classnames';
import styles from './Message.css';

class Message extends React.Component {

    // componentDidUpdate(prevProps) {
    //     console.log('prevProps', prevProps.message.text, 'props', this.props.message.text)
    // }
    render() {
        const { message, user, prevMessage } = this.props;

        
        const autorType = message.type === 'bot' ? 'bot' : message.autor_id === user.id ? 'recipient' : 'sender';
        const autorStyle = autorType === 'bot' ? styles.bot : autorType === 'recipient' ? styles.recipient : styles.sender;
        const isFailed = message.status === 'sending' || message.status === 'failed';
        const isSameTime = prevMessage && message && prevMessage.time === message.time;
        
        console.log('isSameTime', isSameTime)

        return(
            <div className={classNames([styles.container, autorStyle, isSameTime ? styles.isSameTime : null])}>
                {autorType === 'recipient' && !isSameTime && <Avatar layout={styles.avatar} image={user.photo} alt="avatar" />}
                <div className={styles.inner}>
                    {autorType === 'bot' && <StatusSensor size='big' status={message.status} />} 
                    {autorType === 'sender' && <MessageStatusBar status={message.status} />} 
                    <div className={styles.text}>
                        <span className={styles.text_title}>{message.text}</span>
                    </div>
                    {isFailed ? null :  
                    <div className={styles.time}>
                        <span className={styles.time_title}>{message.time}</span>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Message;