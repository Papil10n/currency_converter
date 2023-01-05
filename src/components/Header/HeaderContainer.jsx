import {useEffect} from "react";
import {connect} from "react-redux";
import {updateExchangeRates} from "../../redux/headReducer";
import Header from "./Header";

const HeaderContainer = (props) => {

    useEffect(() => {
        props.updateExchangeRates()
    });

    return <Header usd={props.usd} eur={props.eur}/>;
}

const mstp = (state) => {
    return {
        usd: state.headReducer.UsdToUah,
        eur: state.headReducer.EurToUah,
    }
}

export default connect(mstp, {updateExchangeRates})(HeaderContainer);

