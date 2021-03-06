import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


const App = () => {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;