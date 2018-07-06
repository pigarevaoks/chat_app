import React from 'react';
import { HeaderNavBar, ProfileBtn } from 'components';
import logo from './images/logo.svg'
import profile from './images/profile.png'
import styles from './Header.css';


const Header = () => (
    <div className={styles.container}>
        <div className={styles.inner}>
            <a className={styles.logo} href="#">
                <img className={styles.image} src={logo} alt="logo" />
            </a>
            <HeaderNavBar layout={styles.list} />
            <div className={styles.profile}>
                <ProfileBtn 
                    image={profile} 
                    onClick={() => console.log('GO TO PROFILE')} 
                />
            </div>
        </div>
    </div>
);

export default Header;