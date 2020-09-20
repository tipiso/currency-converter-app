import React, { useEffect, useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Modal from './components/Modal'; 
import ConversionsHistory from './pages/ConversionsHistory';
import Home from './pages/Home';
import Navigation from './containers/Navigation';
import { getCurrencies } from './services/AjaxCalls';
import { getHistoryFromLocalStorage, pushHistoryToLocalStorage, removeHistoryFromLocalStorage, storageAvailable } from './services/LocalStorageHandlers';
import LoadingComponent from './components/LoadingComponent';
import styles from './App.module.css';


function App() {
  const Loading = LoadingComponent(Home);
  const [modalOpen, setModalOpen] = useState({isOpen: false, msg: ''});
  const [appState, setAppState] = useState({
      loading: true,
      currencies: null,
      conversionsHistory: getHistoryFromLocalStorage(),
      localStorageAvailable: storageAvailable('localStorage')
  });

  useEffect(() => {
      setAppState(prevState => ({ ...prevState, loading: true }));
      async function fetchData(){
          const data = await getCurrencies();
          if(data.response){
            setAppState(prevState => ({...prevState, loading: false, currencies: data.currencies.results}));
          }else{
            setModalOpen({isOpen: true, msg: data.errorMsg});
          }
      }
      fetchData();
  }, []);

  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const clearConversionHistory = () => {
    if(appState.localStorageAvailable){
      removeHistoryFromLocalStorage();
    }
    setAppState({...appState, conversionsHistory: []});
  }

  const pushConversionHistory = (conversionDate, targetCurrencyName, targetCurrencyValue, initialCurrencyAmount, initialCurrencyName) =>{
    const historyRecord = {
        initialCurrencyAmount: currencyFormat(+initialCurrencyAmount),
        conversionDate: conversionDate.toISOString().slice(0,10).replace(/-/g,"."),
        targetCurrencyName,
        targetCurrencyValue,
        initialCurrencyName
    }
    const updatedArray = [...appState.conversionsHistory, historyRecord];
    if(appState.localStorageAvailable){
      pushHistoryToLocalStorage(updatedArray);
    }
    setAppState({...appState, conversionsHistory: updatedArray});
  }
  
  return (
    <div className={styles.AppWrapper}>
      <Modal isOpen={modalOpen.isOpen}>
        <span>{modalOpen.msg}</span>
      </Modal>
      <div className={styles.App}>
      <Router>
        <Navigation />
        <div className={styles.AppBody}>
          <Switch>
              <Route exact path="/">
                <Loading                        
                    isLoading={appState.loading} 
                    currencies={appState.currencies}
                    conversionsHistory={appState.conversionsHistory}
                    pushConversionHistory={pushConversionHistory} 
                    currencyFormat={currencyFormat}
                />
              </Route>
              <Route exact path="/list">
                <Loading                        
                    isLoading={appState.loading} 
                    currencies={appState.currencies}
                    conversionsHistory={appState.conversionsHistory}
                    pushConversionHistory={pushConversionHistory} 
                    currencyFormat={currencyFormat}
                />
                <ConversionsHistory 
                  conversionsList={appState.conversionsHistory} 
                  clearConversionHistory={clearConversionHistory}
                />
              </Route>
          </Switch>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
