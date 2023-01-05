import ThemeChangerContainer from "./ThemeChanger/ThemeChangerContainer";
import Preloader from "../../common/Preloader";

const Header = (props) => {
    return (
        <header className="head flex justify-between mx-4 pt-4 mb-24">
            <div className="left flex ">
                <div className="logo mr-20 dark:text-white text-5xl font-jost font-medium">Currency Converter</div>
                <ThemeChangerContainer/>
            </div>

            <div className="right flex">
                <div className="item flex justify-between items-center mr-12 border-b-2 border-b-[#22A900]">
                    <div className="key mr-2.5 dark:text-white">USD/UAH</div>
                    <div className="value ml-2.5 dark:text-[#FFCCCC]">{props.usd ? props.usd : <Preloader/>}</div>
                </div>
                <div className="item flex justify-between items-center border-b-2 border-b-[#22A900]">
                    <div className="key mr-2.5 dark:text-white">EUR/UAH</div>
                    <div className="value ml-2.5 dark:text-[#FFCCCC]">{props.eur ? props.eur : <Preloader/>}</div>
                </div>
            </div>

        </header>
    )
}

export default Header;


