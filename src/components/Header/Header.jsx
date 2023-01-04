import ThemeChanger from "./ThemeChanger/ThemeChanger";

const Header = () => {
    return (
        <header className="head flex justify-between mx-4 pt-4 mb-24">
            <div className="left flex ">
                <div className="logo mr-20 dark:text-white text-5xl font-jost font-medium">Currency Converter</div>
                <ThemeChanger/>
            </div>

            <div className="right flex">
                <div className="item flex justify-between items-center mr-12 border-b-2 dark:border-b-[#22A900]">
                    <p className="key mr-2.5 dark:text-white">USD/UAH</p>
                    <p className="value ml-2.5 dark:text-[#FFCCCC]">38.95</p>
                </div>
                <div className="item flex justify-between items-center border-b-2 dark:border-b-[#22A900]">
                    <p className="key mr-2.5 dark:text-white">EUR/UAH</p>
                    <p className="value ml-2.5 dark:text-[#FFCCCC]">41.20</p>
                </div>
            </div>

        </header>
    )
}

export default Header;