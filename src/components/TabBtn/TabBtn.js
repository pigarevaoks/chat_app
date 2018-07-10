import React from 'react'
import classNames from 'classnames';
import styles from './TabBtn.css';

const TabBtn = ({ title, active, index, onTabPress }) => (
    <div className={classNames([styles.container, active === index ? styles.active : null])} role='button' onClick={onTabPress}>
        <span className={styles.title}>{title}</span>
    </div>
);

export default TabBtn;