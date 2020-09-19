import React from 'react';
import styles from './header.module.css';

export default function Header() {
    return (
        <header>
            <h1 className={styles.HeaderText}>Konwerter walut</h1>
        </header>
    )
}
