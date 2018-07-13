import React from 'react';
import { Avatar } from 'components';
import styles from './ProfileBtn.css';

const ProfileBtn = ({ onClick, image }) => (
    <button type="button" className={styles.button} onClick={onClick}>
        <Avatar layout={styles.image} image={image} alt="logo" />
        <span className={styles.arrow}></span>
    </button>
);

export default ProfileBtn;