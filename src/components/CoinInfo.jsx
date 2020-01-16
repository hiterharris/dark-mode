import React from "react";

const CoinInfo = (props) => {
  const {name, image, current_price, high_24h, low_24h, price_change_24h} = props.coinInfo;
  return (
    <div className="CoinInfo">
      <h1>{name}</h1>
      <div className='coin-data'>
        <img className="coin-img" src={image} />
        <div>
          <h2>Current Price: {current_price}</h2>
          <h2>High: {high_24h}</h2>
          <h2>Low: {low_24h}</h2>
          <h2>Price Change: {price_change_24h}</h2>
        </div>
      </div>
    </div>
  );
};
export default CoinInfo;
