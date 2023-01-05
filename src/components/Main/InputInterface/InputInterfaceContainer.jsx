import {connect} from "react-redux";
import InputInterface from "./InputInterface";
import {calculateCurrencies, setCurrency, setInputValue} from "../../../redux/mainReducer";

const data = {
    UAH: 39,
    USD: 1,
    EUR: 1.1,
    PLN: 4
}

const InputInterfaceContainer = (props) => {

    const calculate = (val, cur) => {
        props.calculateCurrencies(data, cur, props.rightCurrency, parseFloat(val), "rightValue");
    }

    const setNewCurrency = (elem) => {
        const currency = elem.currentTarget.value;
        props.setCurrency("leftCurrency", currency);
        calculate(props.leftValue, currency);
    }

    const setInputValue = (elem) => {
        const value = elem.currentTarget.value;
        props.setInputValue("leftValue", value);
        if (value && !isNaN(value)) calculate(value, props.leftCurrency);
    }

    return <InputInterface setInputValue={setInputValue} leftValue={props.leftValue} leftCurrency={props.leftCurrency}
                           setNewCurrency={setNewCurrency}/>
}

const mstp = (state) => {
    return {
        currenciesToUsd: state.mainReducer.currenciesToUsd,
        leftValue: state.mainReducer.leftValue,
        leftCurrency: state.mainReducer.leftCurrency,
        rightCurrency: state.mainReducer.rightCurrency,
    }
}

export default connect(mstp, {setInputValue, setCurrency, calculateCurrencies,})(InputInterfaceContainer);