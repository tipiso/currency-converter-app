import React from 'react'
import { Form, Field } from 'react-final-form';

export default function ConvertForm(props) {
    return (
        <Form
        onSubmit={props.handleSubmit}
        validate={props.handeValidate}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <h2>An Arbitrary Reusable Input Component</h2>
                <div>
                    <label>Interests</label>
                    <Field name="interests" component="input" />
                </div>
                <h2>An Arbitrary Reusable Input Component</h2>
                <div>
                    <label>Interests</label>
                    <Field name="interests" component="input" />
                </div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>
            </form>
        )}
        />
    )
}
