// Toggle switch icons for both Mobile and Desktop
const toggleSwitches = document.querySelectorAll(".form-check-input");

// Function to change to dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Checking if toggle switch is clicked
toggleSwitch.addEventListener("change", toggleDarkMode);


const fromToken = document.getElementById("from-token");
const fromAmount = document.getElementById("from-amount");
const toToken = document.getElementById("to-token");
const toAmount = document.getElementById("to-amount");

let exchangeRates = {}; // Life exchange rates

// Function to fetch exchange rates from CoinGecko API
async function fetchExchangeRates() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd,gbp,jpy';
    
    try {
        const response = await fetch(url, { method: 'GET', headers: { accept: 'application/json' } });
        const data = await response.json();

        // API response in exchangeRates
        exchangeRates = {
            usd: { btc: 1 / data.bitcoin.usd, eth: 1 / data.ethereum.usd, ada: 1 / data.cardano.usd },
            gbp: { btc: 1 / data.bitcoin.gbp, eth: 1 / data.ethereum.gbp, ada: 1 / data.cardano.gbp },
            jpy: { btc: 1 / data.bitcoin.jpy, eth: 1 / data.ethereum.jpy, ada: 1 / data.cardano.jpy }
        };

        console.log("Live exchange rates:", exchangeRates); // Logging exchangeRates to the console for debugging if needed.

    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}

// Perform the conversion
function getTheConversion() {
    let amount = Number(fromAmount.value);
    let fromCurrency = fromToken.value;
    let toCurrency = toToken.value;


    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        let rate = exchangeRates[fromCurrency][toCurrency];
        let result = amount * rate;
        toAmount.value = result.toFixed(5);
    } else {
        toAmount.value = "N/A"; 
    }
}

// Run function fetchExchangeRates once the page loads
fetchExchangeRates();

getTheConversion();

// Run function getTheConversion when input changes
fromAmount.addEventListener("input", getTheConversion);
fromToken.addEventListener("change", getTheConversion);
toToken.addEventListener("change", getTheConversion);
