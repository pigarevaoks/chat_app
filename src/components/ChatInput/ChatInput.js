import React from 'react';
import classNames from 'classnames';
import styles from './ChatInput.css';

const ChatInput = ({ layout, value, onChange, onKeyPress, placeholder  }) => (
    <div className={classNames([styles.container, layout])}>
        <input 
            type='text' 
            value={value} 
            placeholder={placeholder} 
            onChange={e => onChange(e.target.value)} 
            className={styles.input} 
            onKeyPress={onKeyPress}
        />
    </div>
);

export default ChatInput;