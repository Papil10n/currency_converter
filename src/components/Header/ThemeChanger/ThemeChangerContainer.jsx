import {connect} from "react-redux";
import {themeChanger} from "../../../redux/headReducer";
import ThemeChanger from "./ThemeChanger";

const ThemeChangerContainer = (props) => {

    const swapTheme = () => {
        props.themeChanger()
    }

    return <ThemeChanger swapTheme={swapTheme}/>
}

const mstp = () => {
    return {}
}

export default connect(mstp, {themeChanger})(ThemeChangerContainer);