import React, { useEffect, useState } from 'react';
import { getCurrencies } from '../services/AjaxCalls';
import LoadingComponent from '../components/LoadingComponent';
import ConvertForm from '../components/Form';

export default function FormContainer() {
    const Loading = LoadingComponent(ConvertForm);
    const [formState, setFormState] = useState({
        loading: false,
        currencies: null
    });

    useEffect(() => {
        setFormState({loading: true});
        async function fetchData(){
            const currencies = await getCurrencies();
            setFormState({loading: false, currencies: currencies.results});
        }
        fetchData();
    }, []);

    const onSubmit = () => {
        console.log('submitted');
    }

    const validate = () => {
        console.log('validated');
    }

    console.log(formState);
    return (
        <div className="FormContainer">
            <Loading 
            isLoading={formState.loading} 
            repos={formState.currencies} 
            handleSubmit={onSubmit} 
            handleValidate={validate}
            />
        </div>
    )
}
