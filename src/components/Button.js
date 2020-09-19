import React from 'react';
import classNames from 'classnames';

import styles from './button.module.css';

export default function Button(props) {
    const classes = classNames([
        styles.Button,
        props.danger && styles.Danger,
        props.isPristine && styles.Disabled
    ]);

    return (
        <button 
            onClick={props.handleClick} 
            className={classes} 
            type={props.type} 
            disabled={props.submitting || props.isPristine}>
            {props.description}
        </button>
    )
}
