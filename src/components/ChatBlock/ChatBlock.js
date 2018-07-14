import React from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { ChatHeader, Message, Button, ChatInput } from 'components';
import moment from 'moment';
import { change, addMessage, deleteMessage, resendMessage, upadateField } from 'actions/chatActions';
import styles from './ChatBlock.css';
import { getRandomInt } from 'utils'

class ChatBlock extends React.Component {

    componentDidMount() {
        this._scrollToBottom();
        this._getHeaderAndBottomHeight();
    }

    componentDidUpdate() {
        this._scrollToBottom();
    }

    _scrollToBottom = () => {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        findDOMNode(this.messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    _getHeaderAndBottomHeight = () => {
        this.props.upadateField('chatHeaderHeight', findDOMNode(this.chatHeader).offsetHeight);
        this.props.upadateField('chatBottomHeight', findDOMNode(this.chatBottom).offsetHeight);
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

    _deleteMessage = index => this.props.deleteMessage(index)

    _resendMessage = index => this.props.resendMessage(index)

    _renderLayoutStyles = index => {
        const messages = this.props.chat.messages;
        const isPersonMessage = ['recipient', 'sender'].includes(messages[index].type);
        if (!isPersonMessage) { return }
        const prevMsgAuthor = messages[index - 1].author_id;
        const currMsgAuthor = messages[index].author_id;
        const nextMsgAuthor = messages[index + 1] ? messages[index + 1].author_id : null;
        

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

    _handleKeyPress = e => {
        if (e.key === 'Enter') { this._addMessage() }
    }

    render() {
        const { chat, value, onChange, height } = this.props;
        const isDisabled = value.length === 0;

        return(
            <div className={styles.container}>
                <ChatHeader user={chat.user} ref={elem => this.chatHeader = elem} />
                <div className={styles.inner} ref={elem => this.messageList = elem} style={{ height: height }}>
                    {chat.messages.map((message, index) => {
                        return <Message
                                    type={message.type}
                                    key={index}
                                    message={message}
                                    layout={this._renderLayoutStyles(index)}
                                    user={chat.user}
                                    isHidingTime={['sending', 'failed'].includes(chat.messages[index].status)}
                                    isShowingStatusBar={message.type === 'sender' && message.status !== 'archived'}
                                    resendMessage={() => this._resendMessage(index)}
                                    deleteMessage={() => this._deleteMessage(index)}
                                />
                    })}
                </div>
                <div className={styles.bottom} ref={elem => this.chatBottom = elem}>
                    <ChatInput 
                        layout={styles.input} 
                        value={value} 
                        onChange={onChange} 
                        onKeyPress={this._handleKeyPress}  
                        placeholder='Сообщение'
                    />
                    <Button 
                        title="Отправить" 
                        layout={styles.button} 
                        onClick={this._addMessage} 
                        disabled={isDisabled}
                    />
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        onChange: item => dispatch(change(item)),
        addMessage: message => dispatch(addMessage(message)),
        deleteMessage: index => dispatch(deleteMessage(index)),
        resendMessage: index => dispatch(resendMessage(index)),
        upadateField: (field, value) => dispatch(upadateField(field, value)),
    })
)(ChatBlock);
