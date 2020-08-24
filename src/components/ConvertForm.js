import React from 'react'
import { Form, Field } from 'react-final-form';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import LoadingComponent from './LoadingComponent';
import Button from './Button';
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
                    {({ input, meta }) => (
                        <div className={ meta.error && meta.touched ? `${styles.InputWrap} ${styles.Error}` : styles.InputWrap}>
                            <label className={styles.Label}>Currency amount to convert</label>
                            <TextInput 
                                type={"number"}
                                placeholder="Amount to convert..."
                                input={input}
                            />
                            {meta.error && meta.touched && <span className={styles.FormError}>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="initialCurrencyName" options={props.currencies}>
                        {({input, meta, options}) => {
                            return(
                                <div className={ meta.error && meta.touched ? `${styles.InputWrap} ${styles.Error}` : styles.InputWrap}>
                                    <label className={styles.Label}>Type of currency to convert</label>
                                    <SelectInput 
                                        name={input.name}
                                        options={options}
                                        onChange={(value) => input.onChange(value)}
                                    />
                                    {meta.error && meta.touched && <span className={styles.FormError}>{meta.error}</span>}
                                </div>
                                )
                            }
                        }
                    </Field>
                    <Field name="targetCurrencyName" options={props.currencies} >
                        {({input, meta, options}) => {
                            return(
                                <div className={ meta.error && meta.touched ? `${styles.InputWrap} ${styles.Error}` : styles.InputWrap}>
                                    <label className={styles.Label}>Type of target currency</label>
                                    <SelectInput 
                                        name={input.name}
                                        options={options}
                                        onChange={(value) => input.onChange(value)}
                                    />
                                    {meta.error && meta.touched && <span className={styles.FormError}>{meta.error}</span>}
                                </div>
                                )
                            }
                        }
                    </Field>
                    <footer className={styles.FormFooter}>
                        <Loading      
                                description={"Convert"}                  
                                submitting={submitting}
                                type={"submit"}
                                isLoading={props.formState.loading} 
                        />
                    </footer>
            </form>
        )}
        />
    )
}
