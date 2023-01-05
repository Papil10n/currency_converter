import {connect} from "react-redux";
import OutputInterface from "./OutputInterface";
import {calculateCurrencies, setCurrency, setInputValue} from "../../../redux/mainReducer";

const data = {
    UAH: 39,
    USD: 1,
    EUR: 1.1,
    PLN: 4
}

const OutputInterfaceContainer = (props) => {

    const calculate = (val, cur) => {
        props.calculateCurrencies(data, cur, props.leftCurrency, parseFloat(val), "leftValue");
    }

    const setNewCurrency = (elem) => {
        const currency = elem.currentTarget.value;
        props.setCurrency("rightCurrency", currency);
        calculate(props.rightValue, currency);
    }

    const setInputValue = (elem) => {
        const value = elem.currentTarget.value;
        props.setInputValue("rightValue", value);
        if (value && !isNaN(value)) calculate(value, props.rightCurrency);
    }


    return <OutputInterface setInputValue={setInputValue} rightValue={props.rightValue}
                            rightCurrency={props.rightCurrency}
                            setNewCurrency={setNewCurrency}/>
}

const mstp = (state) => {
    return {
        currenciesToUsd: state.mainReducer.currenciesToUsd,
        rightValue: state.mainReducer.rightValue,
        leftCurrency: state.mainReducer.leftCurrency,
        rightCurrency: state.mainReducer.rightCurrency,
    }
}

export default connect(mstp, {
    setInputValue,
    setCurrency,
    calculateCurrencies,
})(OutputInterfaceContainer);