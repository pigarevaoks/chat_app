import React from 'react'
import classNames from 'classnames';
import styles from './Button.css';

const Button = ({ onClick, layout, title, disabled }) => (
    <button type="button" className={classNames([styles.button, layout])} onClick={onClick} disabled={disabled}>
        <span className={styles.title}>{title}</span>
    </button>
);

export default Button;