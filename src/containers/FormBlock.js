import React from 'react';
import classNames from 'classnames';

import SelectInput from '../components/SelectInput';
import TextInput from '../components/TextInput';
import styles from './formBlock.module.css';

export default function FormBlock(props) {
    const { meta, input, placeholder, label, readOnly, options, type, setTargetCurr, setInitialCurr, targetcurr, initialcurr } = props;
    const errorClassnames = classNames(styles.FormError);
    const inputClassnames = classNames([styles.InputWrap,  meta.error && meta.touched && styles.Error]);
    let inputComponent = null;

    switch(type){
        case 'text': 
            inputComponent = (
                <>
                <TextInput 
                    {...props}
                    type={type}
                    placeholder={placeholder}
                    input={input}
                /> 
                {!readOnly 
                    ?
                    <div data-curr className={styles.CurrencyFloatingBlock}>{initialcurr}</div>
                    :
                    <div data-targ className={styles.CurrencyFloatingBlock}>{targetcurr}</div>
                }
                </>
            );
            break;
        case 'select':
            inputComponent = (
                <SelectInput 
                    {...props}
                    name={input.name}
                    options={options}
                    onChange={(value) => input.onChange(value)}
                    setInitialCurr={setInitialCurr}
                    setTargetCurr={setTargetCurr}
                />
            );
            break;
        default: break;
    }

    return (
        <div className={inputClassnames}>
            {/* <label className={styles.Label}>{label}</label> */}
                {inputComponent}
            {meta.error && meta.touched && <span className={errorClassnames}>{meta.error}</span>}
        </div>
    )
}
