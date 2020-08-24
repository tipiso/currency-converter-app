import React from 'react'
import styles from './textInput.module.css';

export default function TextInput(props) {
    const {input, type, placeholder} = props;

    return (
        <input className={styles.Input} {...input} type={type} placeholder={placeholder} />
    )
}
