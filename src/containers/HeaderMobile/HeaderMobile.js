import React from 'react';
import { HeaderNavBar, ProfileBtn } from 'components';
import logo from '../Header/images/logo.svg'
import styles from './HeaderMobile.css';


class HeaderMobile extends React.Component {

    state = {
        mobileNavVisible: false
    };

    handleNavClick = () => {
        if (!this.state.mobileNavVisible) {
            this.setState({ mobileNavVisible: true });
        } else {
            this.setState({ mobileNavVisible: false });
        }
    }

    navigationLinks = () => {
        return (
            <div className={styles.nav}>
                <HeaderNavBar layout={styles.list} />
                <ProfileBtn onClick={() => console.log('GO TO PROFILE')} />
            </div>
        )
    }

    renderMobileNav = () => {
        if (this.state.mobileNavVisible) {
            return this.navigationLinks();
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <a className={styles.link} href="/">
                            <img className={styles.image} src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className={styles.button} role="button" onClick={this.handleNavClick}></div>
                </div>
                {this.renderMobileNav()}
            </div>
        );
    }
}

export default HeaderMobile;
