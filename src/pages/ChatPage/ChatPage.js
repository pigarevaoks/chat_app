import React from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { Header, Tabs, ChatBlock } from 'components';
import { upadateField } from 'actions/chatActions';
import styles from './ChatPage.css';

class ChatPage extends React.Component {

    componentDidMount() {
        this._getWindowAndHeaderHeight();
    }

    _getWindowAndHeaderHeight = () => {
        this.props.upadateField('windowHeight', window.innerHeight);
        this.props.upadateField('headerHeight', findDOMNode(this.header).offsetHeight);
    }

    render() {
        const { value, chat, profile, windowHeight, headerHeight, chatHeaderHeight, chatBottomHeight } = this.props;

        return (
            <section className={styles.container}>
                <Header profile={profile} ref={elem => this.header = elem}/>
                <div className={styles.chat} style={{ height: windowHeight - headerHeight }}>
                    <Tabs layout={styles.tabs} />
                    <ChatBlock
                        chat={chat}
                        value={value}
                        profile={profile}
                        height={windowHeight - headerHeight - chatHeaderHeight - chatBottomHeight}
                    />
                </div>
            </section>
        )
    }
}

export default connect(
    state => ({
        value: state.chat.inputValue,
        chat: state.chat.chat,
        profile: state.chat.profile,
        windowHeight: state.chat.windowHeight,
        headerHeight: state.chat.headerHeight,
        chatHeaderHeight: state.chat.chatHeaderHeight,
        chatBottomHeight: state.chat.chatBottomHeight,
    }),
    dispatch => ({
        upadateField: (field, value) => dispatch(upadateField(field, value)),
    })
)(ChatPage);
