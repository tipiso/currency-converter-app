import React, { useState } from 'react';
import Form from '../components/Form';
import { getConversion } from '../services/AjaxCalls';
import { withRouter } from 'react-router-dom';

function FormContainer(props) {
    const [formState, setFormState] = useState({
        loading: false,
        convertedValue: null
    });

    const convertValue = (amount, currencyRate) => {
        const conversionObjectKey = Object.keys(currencyRate)[0];
        return Number(amount * currencyRate[conversionObjectKey]).toFixed(2);
    };

    const onSubmit = async (values) => {
        const {initialCurrencyAmount, targetCurrencyName, initialCurrencyName} = values;
        setFormState({ loading: true });
        const currencyRate = await getConversion(initialCurrencyName, targetCurrencyName);
        const currencyValue = convertValue(initialCurrencyAmount, currencyRate);
        setFormState({ loading: false, convertedValue: currencyValue });
        props.pushConversionHistory(initialCurrencyAmount, new Date(), targetCurrencyName, currencyValue, initialCurrencyAmount, initialCurrencyName);
        props.history.push('/list');
    }

    const validate = (values) => {
        const errors = {}
        if (!values.targetCurrencyName) {
          errors.targetCurrencyName = 'Required';
        }
        if (!values.initialCurrencyName) {
          errors.initialCurrencyName = 'Required';
        }
        if(typeof values.initialCurrencyAmount === 'undefined' || values.initialCurrencyAmount <= 0){
          errors.initialCurrencyAmount = 'Required';
        }

        return errors
    }

    return (
        <div className="FormContainer">
            <Form formState={formState} handleValidate={validate} handleSubmit={onSubmit} {...props} />
        </div>
    )
}

export default withRouter(FormContainer);