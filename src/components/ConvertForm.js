import React from 'react'
import { Form, Field } from 'react-final-form';

import FormBlock from '../containers/FormBlock';
import LoadingComponent from './LoadingComponent';
import Button from './Button';
import Arrows from '../images/arrows.svg';
import styles from './convertForm.module.css';

export default function ConvertForm(props) {
    const Loading = LoadingComponent(Button);

    return (
        <Form
        onSubmit={props.handleSubmit}
        validate={props.handleValidate}
        render={({handleSubmit, form, submitting, pristine, values, errors}) => (
            <form onSubmit={handleSubmit}>
                    <Field name="initialCurrencyAmount">
                        {({ input, meta }) => <FormBlock  
                        type="text" 
                        input={input} 
                        meta={meta} 
                        label='Type of currency to convert' 
                        placeholder='Wpisz kwotę' 
                    />}
                    </Field>
                    <Field name="conversionResult">
                        {({ input, meta }) => <FormBlock  
                        type="text" 
                        meta={meta} 
                        readOnly
                        label='Type of currency to convert' 
                        placeholder='Wynik' 
                    />}
                    </Field>
                    <div className={styles.FormSelectBlock}>
                        <Field name="initialCurrencyName" options={props.currencies}>
                            {({input, meta, options}) => <FormBlock 
                            type="select" 
                            input={input} 
                            meta={meta} 
                            options={options} 
                            label='Type of currency to convert' 
                            />}
                        </Field>
                        <div className={styles.BlockIcon}>
                            <img className={styles.Icon} src={Arrows} alt="arrows icon" />
                        </div>
                        <Field name="targetCurrencyName" options={props.currencies} >
                            {({input, meta, options}) => <FormBlock 
                            type="select" 
                            input={input} 
                            meta={meta} 
                            options={options} 
                            label='Type of target currency' 
                            />}
                        </Field>
                    </div>
                    <footer className={styles.FormFooter}>
                        <Loading      
                                description={"Konwertuj"}                  
                                submitting={submitting}
                                isPristine={pristine}
                                type={"submit"}
                                isLoading={props.formState.loading} 
                        />
                    </footer>
            </form>
        )}
        />
    )
}
