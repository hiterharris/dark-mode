import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import CoinInfo from './components/CoinInfo';
import { BrowserRouter as Router, Route} from "react-router-dom";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
    }, []);

    const [coinInfo, setCoinInfo] = useState('');
    useEffect(() => {
      axios.get(`https://api.coingecko.com/api/v3/coins/${coinInfo}`)
        .then(res => {
          return res;
        })
        .catch(err => console.log(err));
    }, [])

  return (
    <div className="App">
      <Navbar />
      <Route path='/CoinInfo'>
        <CoinInfo coinInfo={coinInfo} />
      </Route>
      <Charts coinData={coinData} setCoinInfo={setCoinInfo} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
