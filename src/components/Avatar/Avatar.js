import React from 'react';
import styles from './Avatar.css';
import classNames from 'classnames';

const Avatar = ({ layout, image, alt }) => (
        <div className={classNames([styles.container, layout])}>
            <img src={image} alt={alt} />
        </div>
    );

export default Avatar;