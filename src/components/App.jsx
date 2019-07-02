import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';

function App() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: #FAEBD7;
        }
      `}</style>
      <Header/>
      <MarketSchedule/>
      <AvailableProduce/>
    </div>
  );
}

export default App;
