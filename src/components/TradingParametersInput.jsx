// TradingParametersInput.jsx

import React, { useState } from 'react';

const TradingParametersInput = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [leverage, setLeverage] = useState('');
  const [orderType, setOrderType] = useState('limit');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');

  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleLeverageChange = (event) => {
    setLeverage(event.target.value);
  };

  const handleOrderTypeChange = (event) => {
    setOrderType(event.target.value);
  };

  const handleStopLossChange = (event) => {
    setStopLoss(event.target.value);
  };

  const handleTakeProfitChange = (event) => {
    setTakeProfit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission of trading parameters
    const tradeParams = {
      symbol,
      quantity,
      price,
      leverage,
      orderType,
      stopLoss,
      takeProfit
    };
    console.log('Trade Parameters:', tradeParams);
    // You can perform further actions here, such as submitting the parameters to your trading API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Symbol:
          <input type="text" value={symbol} onChange={handleSymbolChange} />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input type="text" value={quantity} onChange={handleQuantityChange} />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="text" value={price} onChange={handlePriceChange} />
        </label>
      </div>
      <div>
        <label>
          Leverage:
          <input type="text" value={leverage} onChange={handleLeverageChange} />
        </label>
      </div>
      <div>
        <label>
          Order Type:
          <select value={orderType} onChange={handleOrderTypeChange}>
            <option value="limit">Limit</option>
            <option value="market">Market</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Stop Loss:
          <input type="text" value={stopLoss} onChange={handleStopLossChange} />
        </label>
      </div>
      <div>
        <label>
          Take Profit:
          <input type="text" value={takeProfit} onChange={handleTakeProfitChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TradingParametersInput;
