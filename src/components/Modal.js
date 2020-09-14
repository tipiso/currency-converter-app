import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

const modalRoot = document.getElementById('modal');

export default function Modal({ isOpen, children }) {
    const el = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(el);
        return () => modalRoot.removeChild(el);
    }, [el]);

    return (
        isOpen && 
        createPortal(
            <div className={styles.Modal}>
                <p className={styles.ModalBody}>
                    {children}
                </p>
            </div>,
            el
        )
    )
}
