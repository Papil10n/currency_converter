// imports
import {ExchangeRatesAPI} from "../api/api";

// action mode
const SET_THEME_COLOR = "header/SET_THEME_COLOR";
const UPDATE_EXCHANGE_RATES = "header/UPDATE_EXCHANGE_RATES";

// initial state
let initialState = {
    isDarkMode: true,
    UsdToUah: null,
    EurToUah: null,
};

// reducer
export const headReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME_COLOR:
            return {...state, isDarkMode: !state.isDarkMode}
        case UPDATE_EXCHANGE_RATES:
            return {...state, UsdToUah: action.usd, EurToUah: action.eur}
        default:
            return state;
    }
}

// action creator
export const setThemeColor = () => ({type: SET_THEME_COLOR});
export const setNewExchangeRates = (usd, eur) => ({type: UPDATE_EXCHANGE_RATES, usd, eur});


// thunk creator
export const themeChanger = () => (dispatch) => {
    const app = document.querySelector('.converter');
    app.classList.toggle('dark');
    dispatch(setThemeColor());
}
export const updateExchangeRates = () => async (dispatch) => {
    const usd = await ExchangeRatesAPI.getBase("USD");
    const eur = await ExchangeRatesAPI.getBase("EUR");

    dispatch(setNewExchangeRates(usd.UAH.value.toFixed(2), eur.UAH.value.toFixed(2)));
}

// exports
export default headReducer;