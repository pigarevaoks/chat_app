import React from 'react';
import { Header, HeaderMobile, Chat } from 'containers';
import styles from './ChatPage.css';

class ChatPage extends React.Component {
    
    state = {
        windowWidth: window.innerWidth,
        mobileNavVisible: false
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    }

    renderHeader = () => {
        if (this.state.windowWidth <= 1024) {
            return <HeaderMobile />
        } else {
            return <Header />;
        }
    }

    render() {
        return (
            <div className={styles.container}>
                {this.renderHeader()}
                <Chat />
            </div>
        )
    }
}

export default ChatPage;