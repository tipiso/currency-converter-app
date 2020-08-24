import React, {useState} from 'react'
import styles from './selectInput.module.css';

export default function SelectInput(props) {
    const [active, setActive] = useState(false);

    return (
        <div onBlur={() => setActive(false)} onClick={() => setActive(!active)} className={active ? `${styles.ArrowReplacement} ${styles.SelectOpen}` : styles.ArrowReplacement}>
            <select className={styles.Input} name={props.name} onChange={props.onChange}>
                {Object.keys(props.options).map((option) => {
                    return (
                        <option key={option} value={option}>{option}</option>
                    )
                })}
            </select>
        </div>
    )
}
