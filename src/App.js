import React, { useEffect, useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ConversionsHistory from './pages/ConversionsHistory';
import Home from './pages/Home';
import Navigation from './containers/Navigation';
import { getCurrencies } from './services/AjaxCalls';
import { getHistoryFromLocalStorage, pushHistoryToLocalStorage, removeHistoryFromLocalStorage } from './services/LocalStorageHandlers';
import LoadingComponent from './components/LoadingComponent';
import styles from './App.module.css';


function App() {
  const Loading = LoadingComponent(Home);
  const [appState, setAppState] = useState({
      loading: true,
      currencies: null,
      conversionsHistory: getHistoryFromLocalStorage()
  });

  useEffect(() => {
      setAppState({...appState, loading: true});
      async function fetchData(){
          const currencies = await getCurrencies();
          setAppState({...appState, loading: false, currencies: currencies.results});
      }
      fetchData();
  }, []);

  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const clearConversionHistory = () => {
    removeHistoryFromLocalStorage();
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
    pushHistoryToLocalStorage(updatedArray);
    setAppState({...appState, conversionsHistory: updatedArray});
  }
  
  return (
    <div className={styles.AppWrapper}>
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
