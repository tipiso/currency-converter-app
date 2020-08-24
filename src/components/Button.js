import React from 'react'
import styles from './button.module.css';

export default function Button(props) {
    const classes = props.danger ? `${styles.Danger} ${styles.Button}` : `${styles.Button}`;

    return (
        <button onClick={props.handleClick} className={classes} type={props.type} disabled={props.submitting}>
            {props.description}
        </button>
    )
}
