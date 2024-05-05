import React, { useState, useRef } from "react";
import axios from "axios";

const BybitTradeComponent = () => {
  const symbolRef = useRef(null);
  const quantityRef = useRef(null);
  const buyPriceRef = useRef(null);
  const apiKeyRef = useRef(null);
  const apiSecretRef = useRef(null);

  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && e.target.tagName !== "BUTTON") {
      e.preventDefault();
      const inputRefs = [
        symbolRef,
        quantityRef,
        buyPriceRef,
        apiKeyRef,
        apiSecretRef,
      ];
      const index = inputRefs.indexOf(e.target);
      if (index !== -1 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sellPrice = parseFloat(buyPrice) * 1.02;

      const buyOrderResponse = await executeLimitOrder(
        symbol,
        quantity,
        "Buy",
        buyPrice
      );
      console.log("Buy Order Executed:", buyOrderResponse.data);

      const sellOrderResponse = await executeLimitOrder(
        symbol,
        quantity,
        "Sell",
        sellPrice
      );
      console.log("Sell Order Executed:", sellOrderResponse.data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const executeLimitOrder = async (symbol, qty, side, price) => {
    const response = await axios.post(
      "https://api.bybit.com/v2/private/order/create",
      {
        symbol: symbol,
        qty: qty,
        side: side.toLowerCase(),
        price: price,
        order_type: "Limit",
        time_in_force: "GoodTillCancel",
        api_key: apiKey,
        timestamp: Date.now(),
        sign: getSignature(Date.now()),
      }
    );
    return response;
  };

  const getSignature = (timestamp) => {
    const data = `POST/api/v2/private/order/create${timestamp}`;
    const hmac = require("crypto").createHmac("sha256", apiSecret);
    hmac.update(data);
    return hmac.digest("hex");
  };

  return (
    <div>
      <h2>Bybit Trade Component</h2>
      <form onKeyDown={handleKeyDown}>
        <label>
          Symbol:
          <input
            ref={symbolRef}
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            ref={quantityRef}
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Buy Price (USD):
          <input
            ref={buyPriceRef}
            type="text"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Bybit API Key:
          <input
            ref={apiKeyRef}
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Bybit API Secret:
          <input
            ref={apiSecretRef}
            type="text"
            value={apiSecret}
            onChange={(e) => setApiSecret(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Trade</button>
      </form>
    </div>
  );
};

export default BybitTradeComponent;
