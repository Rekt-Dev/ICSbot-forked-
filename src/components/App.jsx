// App.jsx

import React from 'react';
import TradingParametersInput from './TradingParametersInput';
import MultiOrderInput from './MultiOrderInput';

const App = () => {
  const handleSubmitOrders = (orders) => {
    // Handle submitted orders
    console.log('Submitted Orders:', orders);
    // Implement logic to send orders to Bybit
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Trading Parameters Input</h1>
      <div style={{ marginBottom: '20px' }}>
        <TradingParametersInput />
      </div>
      <h2>Multi-Order Input</h2>
      <MultiOrderInput onSubmitOrders={handleSubmitOrders} />
    </div>
  );
};

export default App;
