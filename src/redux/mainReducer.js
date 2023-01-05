// imports
import {ExchangeRatesAPI} from "../api/api";

// action mode
const SET_CURRENCIES_TO_USD = "main/SET_CURRENCIES_TO_USD";
const SET_INPUT_VALUE = "main/SET_INPUT_VALUE";
const SET_CURRENCY = "main/SET_CURRENCY";

// initial state
let initialState = {
    currenciesToUsd: {},
    leftValue: "",
    leftCurrency: "UAH",
    rightValue: "",
    rightCurrency: "USD",
};

// reducer
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCIES_TO_USD:
            let data = {}
            for (let item of Object.values(action.currencies)) {
                data[item.code] = item.value;
            }
            return {...state, currenciesToUsd: data}
        case SET_INPUT_VALUE:
            return {...state, [action.side]: action.value};
        case SET_CURRENCY:
            return {...state, [action.side]: action.currency}
        default:
            return state;
    }
}

// action creator
export const setCurrenciesToUsd = (currencies) => ({type: SET_CURRENCIES_TO_USD, currencies});
export const setInputValue = (side, value) => ({type: SET_INPUT_VALUE, side, value});
export const setCurrency = (side, currency) => ({type: SET_CURRENCY, side, currency});

// thunk creator
export const updateCurrenciesToUsd = () => async (dispatch) => {
    const data = await ExchangeRatesAPI.getCurrenciesToUsd();
    dispatch(setCurrenciesToUsd(data));
}
export const calculateCurrencies = (data, intCrncy, toCrncy, intValue, toSide) => (dispatch) => {
    const value = intValue / data[intCrncy];
    let result = toCrncy === 'USD' ? value : value * data[toCrncy];

    dispatch(setInputValue(toSide, +result.toFixed(3)));
}


// exports
export default mainReducer;