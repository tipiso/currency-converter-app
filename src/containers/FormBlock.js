import React from 'react'
import classNames from 'classnames';

import SelectInput from '../components/SelectInput';
import TextInput from '../components/TextInput';
import styles from './formBlock.module.css';

export default function FormBlock(props) {
    const { meta, input, placeholder, label, options, type } = props;
    const errorClassnames = classNames(styles.FormError);
    const inputClassnames = classNames([styles.InputWrap,  meta.error && meta.touched && styles.Error]);
    let inputComponent = null;
    console.log(props);
    switch(props.type){
        case 'text': 
            inputComponent = (
                <TextInput 
                    {...props}
                    type={type}
                    placeholder={placeholder}
                    input={input}
                /> 
            );
            break;
        case 'select':
            inputComponent = (
                <SelectInput 
                    {...props}
                    name={input.name}
                    options={options}
                    onChange={(value) => input.onChange(value)}
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
