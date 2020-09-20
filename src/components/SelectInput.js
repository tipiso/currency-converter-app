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

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        props.onChange(inputValue);
        if(inputValue){
            switch(inputName){
                case 'initialCurrencyName':
                    props.setInitialCurr(inputValue);
                    break;
                case 'targetCurrencyName':
                    props.setTargetCurr(inputValue);
                    break;
                default: break;
            }
        }
    }

    return (
        <div onBlur={() => setActive(false)} onClick={() => setActive(!active)} className={blockClassnames}>
            <select className={styles.Input} name={props.name} onChange={handleChange}>
                {options}
            </select>
        </div>
    )
}
