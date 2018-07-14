import React from 'react';
import read from './images/read.svg'
import sended from './images/sended.svg'
import refresh from './images/refresh.svg'
import remove from './images/remove.svg'
import styles from './MessageStatusBar.css';
import classNames from 'classnames';

const MessageStatusBar = ({ status, layout, resendMessage, deleteMessage }) => (
    <div className={classNames([styles.container, layout])}>
        {status === 'read' && <img className={styles.image} src={read} alt="read" />} 
        {status === 'sended' && <img className={styles.image} src={sended} alt="sended" />}
        {status === 'sending' && <span className={classNames([styles.title, styles.grey])}>Отправляется…</span>}
        {status === 'failed' &&
            <div>
                <div className={styles.btn} role="button" onClick={resendMessage}>
                    <img className={styles.image} src={refresh} alt="refresh" />
                </div>
                <div className={styles.btn} role="button" onClick={deleteMessage}>
                    <img className={styles.image} src={remove} alt="remove" />
                </div>
                <span className={classNames([styles.title, styles.red])}>Не отправлено</span>
            </div>}
    </div>
);

export default MessageStatusBar;