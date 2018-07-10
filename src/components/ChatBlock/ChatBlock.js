import React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatHeader, Message, Button, ChatInput } from 'components';
import moment from 'moment';
import localization from 'moment/locale/ru'
import styles from './ChatBlock.css';

class ChatBlock extends React.Component {

    scrollToBottom = () => {
        const { messageList } = this.refs;
        const scrollHeight = messageList.scrollHeight;
        const height = messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
    

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    _addMessage = () => {
        const { value, profile, addMessage, onChange } = this.props;
        const nowDate = moment().format('MM-DD-YYYY');
        const nowTime = moment().format('HH:MM');

        const message = {
            type: 'person',
            text: value,
            time: nowTime,
            autor_id: profile.id,
            status: 'sended'
        }

        addMessage(message, nowDate);
        onChange('');
    }

    _renderMessages = () => {
        const messages = this.props.chat.messages;
            return Object.keys(messages).map((key) => {
                return (
                    <div key={key}>
                        <div className={styles.date}>
                            <span className={styles.date_title}>{moment(key).locale("ru", localization).format('D MMMM')}</span>
                        </div>
                        
                        {messages[key].map((message, index) => <Message key={index} message={message} prevMessage={messages[key][index - 1]} user={this.props.chat.user} />)}
                    </div>
                )
            });
    }

    render() {
        const { chat, value, onChange, deleteMessage } = this.props;
        const isDisabled = value.length === 0;

        return(
            <div className={styles.container}>
                <ChatHeader user={chat.user}/>
                <div className={styles.inner} ref="messageList" >
                    {this._renderMessages()}
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