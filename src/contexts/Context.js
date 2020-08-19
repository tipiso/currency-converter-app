import React, { createContext } from 'react';

const AppContext = createContext({
    state: {},
    dispatch: () => null
});

function AppProvider(props){
    // const [state, dispatch] = React.useReducer(formReducer, initialState);

    return (
        <AppContext.Provider value={''} {...props} />
    )
}

export { AppContext, AppProvider };