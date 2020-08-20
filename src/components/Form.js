import React from 'react'
import { Form, Field } from 'react-final-form';
import Options from './Options';
import LoadingComponent from '../components/LoadingComponent';
import OutComponent from '../components/OutputComponent';

export default function ConvertForm(props) {
    const Loading = LoadingComponent(OutComponent);

    return (
        <Form
        onSubmit={props.handleSubmit}
        validate={props.handleValidate}
        render={({handleSubmit, form, submitting, pristine, values, errors}) => (
            <form onSubmit={handleSubmit}>
                    <Field name="initialCurrencyAmount">
                    {({ input, meta }) => (
                        <div>
                            <label>Currency amount to convert</label>
                            <input {...input} type="text" placeholder="Amount to convert..." />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="initialCurrencyName" options={props.currencies}>
                        {({input, meta, options}) => {
                            return(
                                <div>
                                    <label>Type of currency to convert</label>
                                    <Options 
                                        name={input.name}
                                        options={options}
                                        onChange={(value) => input.onChange(value)}
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                                )
                            }
                        }
                    </Field>
                    <Field name="targetCurrencyName" options={props.currencies} >
                        {({input, meta, options}) => {
                            return(
                                <div>
                                    <label>Type of target currency</label>
                                    <Options 
                                        name={input.name}
                                        options={options}
                                        onChange={(value) => input.onChange(value)}
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                                )
                            }
                        }
                    </Field>
                <button 
                    type="submit" 
                    disabled={submitting}
                >
                Konwertuj
                </button>
                <Loading                        
                        isLoading={props.formState.loading} 
                        convertedValue={props.formState.convertedValue} 
                />
            </form>
        )}
        />
    )
}
