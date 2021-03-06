import React from 'react';
import { StatusSensor } from 'components';
import star from './images/star.svg'
import styles from './ChatHeader.css';

class ChatHeader extends React.Component {
    
    render() {
        const { user } = this.props;
        
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <span className={styles.name}>{user.name}</span>
                    <div>
                        <StatusSensor size='small' status={user.status} />
                        <span className={styles.status}>{user.status === 'online' ? 'В сети' : 'Не сети'}</span>
                    </div>
                </div>
                <div className={styles.right_block}>
                    <a className={styles.profile} href="/">Профиль ситтера</a>
                    <div className={styles.star} role='button'>
                        <img className={styles.image} src={star} alt="logo" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatHeader;