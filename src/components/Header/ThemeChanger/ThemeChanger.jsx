const ThemeChanger = (props) => {
    return (
        <div className="cont flex items-center">
            <button onClick={props.swapTheme} className="w-7 h-10 bg-[#A5A5A5] border-[1px] border-black dark:bg-[#1D1D1D] dark:border-white rounded-[100px/50px] flex justify-center items-start">
                <div className="w-5 h-5 bg-[#000000] mt-4 dark:bg-[#22A900] rounded-full dark:mt-0.5"></div>
            </button>
        </div>
    )
}

export default ThemeChanger;
