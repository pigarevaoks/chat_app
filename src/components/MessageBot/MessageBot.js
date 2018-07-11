import React from 'react';
import { StatusSensor } from 'components';
import styles from './MessageBot.css';

const MessageBot = ({ message }) => (
    <div className={styles.container}>
        <StatusSensor size='big' status={message.status} />
        <span className={styles.text}>{message.text}</span>
        <span className={styles.time}>{message.time}</span>
    </div>
);

export default MessageBot;