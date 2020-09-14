import React, { useState } from 'react';

import Modal from '../components/Modal';
import ConvertForm from '../components/ConvertForm';
import { getConversion } from '../services/AjaxCalls';
import { withRouter } from 'react-router-dom';

function FormContainer(props) {
    const [modalOpen, setModalOpen] = useState({isOpen: false, msg: ''});
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
        const data = await getConversion(initialCurrencyName, targetCurrencyName);
        if(data.response){
            const currencyValue = convertValue(initialCurrencyAmount, data.currencyRate);
            setFormState({ loading: false });
            props.pushConversionHistory(new Date(), targetCurrencyName, currencyValue, initialCurrencyAmount, initialCurrencyName);
            props.history.push('/list');
        }else{
            setModalOpen({isOpen: true, msg: data.errorMsg});
        }
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
            <Modal isOpen={modalOpen.isOpen}>
                <span>{modalOpen.msg}</span>
            </Modal>
            <ConvertForm formState={formState} handleValidate={validate} handleSubmit={onSubmit} {...props} />
        </div>
    )
}

export default withRouter(FormContainer);