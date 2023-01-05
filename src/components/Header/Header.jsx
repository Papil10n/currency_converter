import ThemeChangerContainer from "./ThemeChanger/ThemeChangerContainer";
import Preloader from "../../common/Preloader";

const Header = (props) => {
    return (
        <header
            className="head flex min-[899px]:flex-row flex-col items-center justify-between mx-4 pt-4 min-[590px]:mb-24">
            <div className="left flex max-[899px]:mb-4 ">
                <div
                    className="logo min-[899px]:mr-20 min-[590px]:text-5xl mr-5 dark:text-white min-[350px]:text-3xl text-xl font-jost font-medium">Currency
                    Converter
                </div>
                <ThemeChangerContainer/>
            </div>

            <div className="right flex max-[350px]:flex-col justify-center items-center">
                <div
                    className="item flex justify-between items-center  min-[350px]:mr-12 border-b-2 border-b-[#22A900]">
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


