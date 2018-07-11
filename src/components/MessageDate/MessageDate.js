import React from 'react';
import moment from 'moment';
import localization from 'moment/locale/ru'
import styles from './MessageDate.css';

const MessageDate = ({ message }) => (
    <div className={styles.date}>
        <span className={styles.date_title}>{moment(message.date).locale("ru", localization).format('D MMMM')}</span>
    </div>
);

export default MessageDate;