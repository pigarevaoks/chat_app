import React from 'react';
import styles from './ProfileBtn.css';

const ProfileBtn = ({ onClick, image }) => (
    <button type="button" className={styles.button} onClick={onClick}>
        <img className={styles.image} src={image} alt="logo" />
        <span className={styles.arrow}></span>
    </button>
);

export default ProfileBtn;