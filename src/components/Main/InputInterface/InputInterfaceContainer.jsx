import {connect} from "react-redux";
import InputInterface from "./InputInterface";
import {calculateCurrencies, setCurrency, setInputValue} from "../../../redux/mainReducer";
import Preloader from "../../../common/Preloader";


const InputInterfaceContainer = (props) => {

    const calculate = (val, cur) => {
        props.calculateCurrencies(props.currenciesToUsd, cur, props.rightCurrency, parseFloat(val), "rightValue");
    }

    const setNewCurrency = (elem) => {
        const currency = elem.currentTarget.value;
        props.setCurrency("leftCurrency", currency);
        if (props.leftValue) {
            calculate(props.leftValue, currency);
        }
    }

    const setInputValue = (elem) => {
        const value = elem.currentTarget.value;
        if (value.length < 7) {
            props.setInputValue("leftValue", value);
            if (value && !isNaN(value)) calculate(value, props.leftCurrency);
        }

    }

    return <>
        {Object.keys(props.currenciesToUsd).length === 0 ? <Preloader/> :
            <InputInterface setInputValue={setInputValue} leftValue={props.leftValue} leftCurrency={props.leftCurrency}
                            setNewCurrency={setNewCurrency}/>}
    </>

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