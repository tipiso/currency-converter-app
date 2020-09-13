import React, {useState} from 'react'
import classNames from 'classnames';

import styles from './selectInput.module.css';

export default function SelectInput(props) {
    const [active, setActive] = useState(false);
    const blockClassnames = classNames([styles.ArrowReplacement, active && styles.SelectOpen]);
    let options = null;

    if(props.options){
        options =  (
            Object.keys(props.options).map((option) => {
                return (
                    <option key={option} value={option}>{option}</option>
                )
            })
        );
    }
    
    return (
        <div onBlur={() => setActive(false)} onClick={() => setActive(!active)} className={blockClassnames}>
            <select className={styles.Input} name={props.name} onChange={props.onChange}>
                {options}
            </select>
        </div>
    )
}
