import React from 'react';
import { MessageStatusBar, Avatar } from 'components';
import classNames from 'classnames';
import styles from './MessageUser.css';

const Message = ({ message, user, layout, isHidingTime, isShowingStatusBar, resendMessage, deleteMessage }) => (
    <div className={classNames([styles.main, styles[message.type], styles[layout]])} >
        <div className={styles.container}>
            {message.type === 'recipient' && 
                <Avatar 
                    layout={styles.avatar} 
                    image={user.photo} 
                    alt="avatar" 
                />}
            <div className={styles.inner}>
                <div className={styles.info}>
                    {isShowingStatusBar && 
                        <MessageStatusBar 
                            layout={styles.status} 
                            status={message.status} 
                            id={message.id} 
                            resendMessage={resendMessage} 
                            deleteMessage={deleteMessage} 
                    />} 
                    {isHidingTime && <span className={styles.time}>{message.time}</span>}
                </div>
                <span className={styles.text}>{message.text}</span>
            </div>
        </div>
    </div>
)

export default Message;