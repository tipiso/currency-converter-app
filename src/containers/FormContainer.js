import React, { useState } from 'react';
import ConvertForm from '../components/ConvertForm';
import { getConversion } from '../services/AjaxCalls';
import { withRouter } from 'react-router-dom';

function FormContainer(props) {
    const [formState, setFormState] = useState({
        loading: false,
    });

    const convertValue = (amount, currencyRate) => {
        const conversionObjectKey = Object.keys(currencyRate)[0];
        return props.currencyFormat(Number(amount * currencyRate[conversionObjectKey]));
    };

    const onSubmit = async (values) => {
        const {initialCurrencyAmount, targetCurrencyName, initialCurrencyName} = values;
        setFormState({ loading: true });
        const currencyRate = await getConversion(initialCurrencyName, targetCurrencyName);
        const currencyValue = convertValue(initialCurrencyAmount, currencyRate);
        setFormState({ loading: false });
        props.pushConversionHistory(new Date(), targetCurrencyName, currencyValue, initialCurrencyAmount, initialCurrencyName);
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
            <ConvertForm formState={formState} handleValidate={validate} handleSubmit={onSubmit} {...props} />
        </div>
    )
}

export default withRouter(FormContainer);