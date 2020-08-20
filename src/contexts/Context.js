import React, { createContext } from 'react';

const CurrencyContext = createContext({
    currencies: [],
    historyConversions: [],
    addConversionToHistory: (currencyBeforeConversion, quantityBeforeConversion, targetCurrency, targetCurrencyQuantity ,date) => null
});

function AppProvider(props){
    // const [state, dispatch] = React.useReducer(formReducer, initialState);

    return (
        <CurrencyContext.Provider value={''} {...props} />
    )
}

export { CurrencyContext, AppProvider };