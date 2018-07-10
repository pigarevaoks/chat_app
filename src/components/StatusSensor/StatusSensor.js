import React from 'react';
import styles from './StatusSensor.css';
import classNames from 'classnames';

const StatusSensor = ({ size, status }) => {
    const tabSize = size === 'small' ? styles.small : styles.big;
    const tabStatus = status === 'sended' || status === 'online' ? styles.active : styles.disabled;
    return(
        <div className={classNames([styles.container, tabSize, tabStatus])}></div>
    );
}

export default StatusSensor;