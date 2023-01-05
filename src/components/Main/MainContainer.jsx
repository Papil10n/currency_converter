import Main from "./Main";
import {updateCurrenciesToUsd} from "../../redux/mainReducer";
import {connect} from "react-redux";
import {useEffect} from "react";

const MainContainer = (props) => {
    console.log('rendered')

    useEffect(() => {
        props.updateCurrenciesToUsd();
    })

    return <Main/>
}

const mstp = () => {
    return {}
}

export default connect(mstp, {updateCurrenciesToUsd})(MainContainer);