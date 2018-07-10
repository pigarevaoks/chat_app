import React from 'react';
import { connect } from 'react-redux';
import { HeaderNavBar, ProfileBtn } from 'components';
import logo from './images/logo.svg'
import styles from './Header.css';


class Header extends React.Component {
    render() {
        const { profile } = this.props;
        return(
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <a className={styles.link} href="/">
                            <img className={styles.image} src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className={styles.profile}>
                        <ProfileBtn 
                            image={profile.photo} 
                            onClick={() => console.log('GO TO PROFILE')} 
                        />
                    </div>
                    <HeaderNavBar layout={styles.list} />
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        profile: state.chat.profile,
    }),
    null
)(Header);
