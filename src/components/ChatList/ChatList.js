import React from 'react';
import styles from './ChatList.css';

const ChatList = ({ tabs, active }) => (
    <div className={styles.container}>
        <span>{tabs[active].content}</span>
    </div>
);

export default ChatList;