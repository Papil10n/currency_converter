import {connect} from "react-redux";
import OutputInterface from "./OutputInterface";
import {calculateCurrencies, setCurrency, setInputValue} from "../../../redux/mainReducer";
import Preloader from "../../../common/Preloader";


const OutputInterfaceContainer = (props) => {

    const calculate = (val, cur) => {
        props.calculateCurrencies(props.currenciesToUsd, cur, props.leftCurrency, parseFloat(val), "leftValue");
    }

    const setNewCurrency = (elem) => {
        const currency = elem.currentTarget.value;
        props.setCurrency("rightCurrency", currency);
        if (props.rightValue) {
            calculate(props.rightValue, currency);
        }
    }

    const setInputValue = (elem) => {
        const value = elem.currentTarget.value;
        if (value.length < 7) {
            props.setInputValue("rightValue", value);
            if (value && !isNaN(value)) calculate(value, props.rightCurrency);
        }
    }


    return <>
        {Object.keys(props.currenciesToUsd).length === 0 ? <Preloader/> :
            <OutputInterface setInputValue={setInputValue} rightValue={props.rightValue}
                             rightCurrency={props.rightCurrency}
                             setNewCurrency={setNewCurrency}/>}
    </>
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