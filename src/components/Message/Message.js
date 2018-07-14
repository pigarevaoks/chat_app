import React, { Component } from 'react';
import { MessageBot, MessageUser, MessageDate } from 'components';

class Message extends Component {
    components = {
        bot: MessageBot,
        date: MessageDate,
        sender: MessageUser,
        recipient: MessageUser
    };

    render() {
        const Component = this.components[this.props.type];
        return <Component {...this.props} />
    }
}
export default Message;