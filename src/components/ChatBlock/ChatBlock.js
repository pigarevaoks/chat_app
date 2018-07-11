import React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatHeader, Message, Button, ChatInput, MessageDate, MessageBot } from 'components';
import moment from 'moment';
import styles from './ChatBlock.css';
import { getRandomInt} from 'utils'

class ChatBlock extends React.Component {

    componentDidMount() {
        this._scrollToBottom();
    }

    componentDidUpdate() {
        this._scrollToBottom();
    }

    _scrollToBottom = () => {
        const { messageList } = this.refs;
        const scrollHeight = messageList.scrollHeight;
        const height = messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    _addMessage = () => {
        const { value, profile, addMessage, onChange } = this.props;

        const message = {
            id: getRandomInt(1, 1000).toString(),
            type: 'sender',
            text: value,
            date: moment().format('MM-DD-YYYY'),
            time: moment().format('HH:MM'),
            author_id: profile.id,
            status: 'sended'
        }

        addMessage(message);
        onChange('');
    }

    _deleteMessage = index => {
        this.props.deleteMessage(index)
    }

    _resendMessage = index => {
        this.props.resendMessage(index)
    }

    _renderLayoutStyles = index => {
        const messages = this.props.chat.messages;
        const isPersonMessage = ['bot', 'date'].indexOf(messages[index].type) === -1;
        const prevMsgAuthor = messages[index - 1].author_id;
        const currMsgAuthor = messages[index].author_id;
        const nextMsgAuthor = messages[index + 1] ? messages[index + 1].author_id : null;
        
        if (!isPersonMessage) { return }

        if (currMsgAuthor !== prevMsgAuthor && currMsgAuthor !== nextMsgAuthor) {
            return 'alone'
        } else if (currMsgAuthor !== prevMsgAuthor && currMsgAuthor === nextMsgAuthor) {
            return 'first'
        } else if (currMsgAuthor === prevMsgAuthor && currMsgAuthor !== nextMsgAuthor) {
            return 'last'
        } else {
            return 'between'
        }
    }

    render() {
        const { chat, value, onChange } = this.props;
        const isDisabled = value.length === 0;
        
        return(
            <div className={styles.container}>
                <ChatHeader user={chat.user}/>
                <div className={styles.inner} ref="messageList" >
                    {chat.messages.map((message, index) => {
                        const isHidingTime = ['sending', 'failed'].indexOf(chat.messages[index].status) === -1;
                        const isShowingStatusBar = message.type === 'sender' && message.status !== 'archived';
                        if (message.type === 'date') {
                            return <MessageDate key={index} message={message} />
                        } else if (message.type === 'bot') {
                            return <MessageBot key={index} message={message} />
                        } else {
                            return <Message 
                                        key={index}
                                        message={message}
                                        layout={this._renderLayoutStyles(index)}
                                        user={chat.user}
                                        isHidingTime={isHidingTime}
                                        isShowingStatusBar={isShowingStatusBar}
                                        resendMessage={() => this._resendMessage(index)}
                                        deleteMessage={() => this._deleteMessage(index)}
                                    />
                        }
                    })}
                </div>
                <div className={styles.bottom}>
                    <ChatInput layout={styles.input} value={value} onChange={onChange} placeholder='Сообщение' />
                    <Button title="Отправить" layout={styles.button} onClick={this._addMessage} disabled={isDisabled} />
                </div>
            </div>
        );
    }
}

export default ChatBlock;