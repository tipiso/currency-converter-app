import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { AppProvider } from './contexts/Context';
import List from './pages/List';
import Home from './pages/Home';
import './App.css';

function App() {
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
              <Home />
            </Route>
            <Route exact path="/list">
              <List />
            </Route>
          </AppProvider>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
