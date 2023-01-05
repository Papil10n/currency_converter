import Main from "./Main";
import {updateCurrenciesToUsd} from "../../redux/mainReducer";
import {connect} from "react-redux";
import {useEffect} from "react";

const MainContainer = (props) => {
    useEffect(() => {
        props.updateCurrenciesToUsd();
    })

    return <Main currencies={props.currencies}/>
}

const mstp = (state) => {
    return {
        currencies: state.mainReducer.currenciesToUsd,
    }
}

export default connect(mstp, {updateCurrenciesToUsd})(MainContainer);