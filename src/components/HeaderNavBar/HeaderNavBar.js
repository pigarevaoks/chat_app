import React from 'react';
import styles from './HeaderNavBar.css';
import classNames from 'classnames';

const HeaderNavBar = ({ layout }) => (
    <nav className={classNames([styles.list, layout])}>
        <a href="/" className={styles.item}>Сообщения</a>
        <a href="/" className={styles.item}>Найти ситтера</a>
        <a href="/" className={styles.item}>Все ситтеры</a>
    </nav>
);

export default HeaderNavBar;