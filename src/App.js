import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/shopComponent';
import Header from './components/header/header.component';
import './App.css';

import HomePage from './pages/homepage/homepageComponent';


function App() {
  return (
    <div> 
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
