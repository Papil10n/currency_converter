import axios from "axios";

const API_KEY = "apikey=pYFlAVIXjLOca5xS1RtMfxJrYaBCbZRN54Nh72J4";

const instance = axios.create({
    baseURL: `https://api.currencyapi.com/v3`,
});

export const ExchangeRatesAPI = {
    getBase: (value) => {
        return instance(`latest?${API_KEY}&base_currency=${value}&currencies=UAH`)
            .then(response => response.data.data);
    },
    getCurrenciesToUsd: () => {
        return instance(`latest?${API_KEY}&currencies=USD,EUR,PLN,UAH`)
            .then(response => response.data.data);
    }
}