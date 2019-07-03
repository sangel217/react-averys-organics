import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: #FAEBD7;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={MarketSchedule}/>
        <Route path='/produce' component={AvailableProduce}/>
      </Switch>
    </div>
  );
}

export default App;
