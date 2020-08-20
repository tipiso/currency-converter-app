import React, { useEffect, useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { AppProvider } from './contexts/Context';
import List from './pages/List';
import Home from './pages/Home';
import { getCurrencies } from './services/AjaxCalls';
import LoadingComponent from './components/LoadingComponent';
import './App.css';

function App() {
  const Loading = LoadingComponent(Home);
  const [appState, setAppState] = useState({
      loading: true,
      currencies: null,
      conversionsHistory: []
  });

  useEffect(() => {
      setAppState({...appState, loading: true});
      async function fetchData(){
          const currencies = await getCurrencies();
          setAppState({...appState, loading: false, currencies: currencies.results});
      }
      fetchData();
  }, []);
  
  const pushConversionHistory = (amount, date, targetCurrencyName, targetCurrencyValue, initialCurrencyAmount, initialCurrencyName) =>{
    const historyRecord = {
        amount,
        date,
        targetCurrencyName,
        targetCurrencyValue,
        initialCurrencyAmount,
        initialCurrencyName
    }
    const updatedArray = [...appState.conversionsHistory, historyRecord];
    console.log(appState, updatedArray);
    setAppState({...appState, conversionsHistory: updatedArray});
  }
  
  return (
    <>
    <Router>
      <ul>  
        <li>
          <Link to="/">Converter form</Link>
        </li>
        <li>
          <Link to="/list">Conversion list</Link>
        </li>
      </ul>
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <AppProvider>
            <Route exact path="/">
              <Loading                        
                  isLoading={appState.loading} 
                  currencies={appState.currencies}
                  conversionsHistory={appState.conversionsHistory}
                  pushConversionHistory={pushConversionHistory} 
               />
            </Route>
            <Route exact path="/list">
              <List conversionsList={appState.conversionsHistory} />
            </Route>
          </AppProvider>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
