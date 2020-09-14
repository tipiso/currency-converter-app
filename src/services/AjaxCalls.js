const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`;

export async function getCurrencies() {
    try{
        const response = await fetch(API_URL);
        if(response.ok){
            const currencies = await response.json();
            return {response: true, currencies};
        }else if(response.status === 400){
            return {response: false, errorMsg: 'Missing API_KEY' };
        }else{
            return {response: false, errorMsg: `Response not ok, error: ${response.status}`}
        }
    }catch(error){
        alert(error);
    }
}

export async function getConversion(initialCurrency, targetCurrency){
    const API_GET_CONVERSION = `https://free.currconv.com/api/v7/convert?q=${initialCurrency}_${targetCurrency}&compact=ultra&apiKey=${API_KEY}`;
    try{
        const response = await fetch(API_GET_CONVERSION);
        if(response.ok){
            const currencyRate = await response.json();
            return {response: true, currencyRate};
        }else{
            return {response: false, errorMsg: `Response not ok: ${response.statusText}`};
        }
    }catch(error){
        alert(error);
    }
}
