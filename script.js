const url = 'https://api.coingecko.com/api/v3/simple/price?ids=01coin&vs_currencies=usd';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-xLYwmbrB1pePLmacdCZbotTz'}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

