import axios from "axios";

const API_KEY = "apikey=B3xd2CouFBATE0LLpuUjG7UBP60FOOx3h6FEbRNE";

const instance = axios.create({
    baseURL: `https://api.currencyapi.com/v3`,
});

export const ExchangeRatesAPI = {
    getBase: (value) => {
        return instance(`latest?${API_KEY}&base_currency=${value}&currencies=UAH`)
            .then(response => response.data.data)
    }
}