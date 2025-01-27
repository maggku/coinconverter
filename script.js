
import {
  coinMap
} from './coin-map.js';

function getCoinIdBySymbol(symbol) {
    const coin = coinMap.find(coin => coin.symbol.toLowerCase() === symbol.toLowerCase());
    return coin ? coin.id : null;
}

const fromToken = document.getElementById('from-token');
const toToken = document.getElementById('to-token');

const convertButton = document.getElementById('convert-button');

function fetchExchange() {
    const fromSymbol = fromToken.value;
    const toSymbol = toToken.value;
    const fromId = fromSymbol.toLowerCase;
    const toId = getCoinIdBySymbol(toSymbol);
    if (!fromId || !toId) {
      console.error('Invalid symbol');
      alert('Invalid token selected. Please try again.');
      return;
    }
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${toId}&vs_currencies=${fromId}`;
      const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-xLYwmbrB1pePLmacdCZbotTz'}
  };
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

convertButton.addEventListener('click', fetchExchange);
