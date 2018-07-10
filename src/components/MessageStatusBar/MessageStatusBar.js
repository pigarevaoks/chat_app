import React from 'react';
import read from './images/read.svg'
import sended from './images/sended.svg'
import refresh from './images/refresh.svg'
import remove from './images/remove.svg'
import styles from './MessageStatusBar.css';
import classNames from 'classnames';

class MessageStatusBar extends React.Component {
    render() {
        const { status } = this.props;
        
        return (
            <div className={styles.container}>
                {
                    status === 'read' ? 
                        <img className={styles.image} src={read} alt="read" /> : 
                    status === 'sended' ?
                        <img className={styles.image} src={sended} alt="sended" /> : 
                    status === 'sending' ?
                        <span className={classNames([styles.title, styles.grey])}>Отправляется…</span> :
                    status === 'failed' ? 
                        <div>
                            <div className={styles.btn} role="button" onClick={() => console.log('REFRESH')}>
                                <img className={styles.image} src={refresh} alt="refresh" />
                            </div>
                            <div className={styles.btn} role="button" onClick={() => console.log('DELETE')}>
                                <img className={styles.image} src={remove} alt="remove" />
                            </div>
                                <span className={classNames([styles.title, styles.red])}>Не отправлено</span>
                        </div> :
                    null
                }
            </div>
        );
    }
}

export default MessageStatusBar;