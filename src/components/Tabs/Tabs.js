import React from 'react';
import { TabBtn, ChatList } from 'components';
import classNames from 'classnames';
import styles from './Tabs.css';

class Tabs extends React.Component {

    state = { 
        tabs: [
            {
                title: 'Все',
                content: '1',
            }, 
            {
                title: 'С заказами',
                content: '2',
            }, 
            {
                title: 'Избранные',
                content: '3',
            }],
        active: 0
    }

    _onTabPress = value => {
        this.setState({ active: value })
    }

    render() {
        const { tabs, active } = this.state;
        const { layout } = this.props;

        return (
            <div className={classNames([styles.container, layout])}>
                <div className={styles.inner}>
                    {tabs.map((tab, index) => 
                        <TabBtn 
                            key={index} 
                            title={tab.title} 
                            active={active} 
                            index={index} 
                            onTabPress={() => this._onTabPress(index)} 
                        />)}
                </div>
                <ChatList tabs={tabs} active={active} />
            </div>
        )
    }
}

export default Tabs;