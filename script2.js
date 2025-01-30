const fromToken = document.getElementById("from-token");
const fromAmount = document.getElementById("from-amount");
const toToken = document.getElementById("to-token");
const toAmount = document.getElementById("to-amount");

let exchangeRates = {}; // Store life exchange rates

// Function to fetch exchange rates from CoinGecko API
async function fetchExchangeRates() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd,gbp,jpy';
    
    try {
        const response = await fetch(url, { method: 'GET', headers: { accept: 'application/json' } });
        const data = await response.json();

        // Store API response in exchangeRates
        exchangeRates = {
            usd: { btc: 1 / data.bitcoin.usd, eth: 1 / data.ethereum.usd, ada: 1 / data.cardano.usd },
            gbp: { btc: 1 / data.bitcoin.gbp, eth: 1 / data.ethereum.gbp, ada: 1 / data.cardano.gbp },
            jpy: { btc: 1 / data.bitcoin.jpy, eth: 1 / data.ethereum.jpy, ada: 1 / data.cardano.jpy }
        };

        console.log("Live exchange rates:", exchangeRates); // Debugging: Check API data

    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}
