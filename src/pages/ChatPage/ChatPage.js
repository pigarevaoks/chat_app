import React from 'react';
import { Header, Chat } from 'containers';
import styles from './ChatPage.css';

class ChatPage extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Header />
                <Chat />
            </div>
        )
    }
}

export default ChatPage;