//example https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=3fcc08725fae89c4b98a
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`;

export async function getCurrencies() {
    try{
        const response = await fetch(API_URL);
        if(response.ok){
            const currencies = await response.json();
            return currencies;
        }else{
            console.log('Response not ok');
            return response.statusText;
        }
    }catch(error){
        console.log(error);
        return error;
    }
}

export async function getConversion(initialCurrency, targetCurrency){
    const API_GET_CONVERSION = `https://free.currconv.com/api/v7/convert?q=${initialCurrency}_${targetCurrency}&compact=ultra&apiKey=${API_KEY}`;
    try{
        const response = await fetch(API_GET_CONVERSION);
        if(response.ok){
            const conversionResult = await response.json();
            return conversionResult;
        }else{
            console.log('Response not ok');
            return response.statusText;
        }
    }catch(error){
        console.log(error);
        return error;
    }
}
