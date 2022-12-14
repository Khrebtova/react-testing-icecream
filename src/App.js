
import './App.css';
import React from 'react';
import SummaryForm from './pages/summary/SummaryForm';
import OrderEntry from './pages/orderEntry/OrderEntry';

function App() {
  return (
    <div className="App">
      {/* <SummaryForm /> */}
      <OrderEntry />
    </div>
  );
}

export default App;
