import React from 'react';
import { Header, Chat } from 'containers';

class ChatPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Chat />
            </div>
        )
    }
}

export default ChatPage;