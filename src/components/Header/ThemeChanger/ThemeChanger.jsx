const ThemeChanger = () => {

    const swapTheme = () => {
        console.log('click');
    }

    return (
        <div className="cont flex items-center">
            <button onClick={swapTheme} className="w-7 h-10 dark:bg-[#1D1D1D] rounded-[100px/50px] flex justify-center items-start">
                <div className="w-6 h-6 dark:bg-[#22A900] rounded-full mt-0.5"></div>
            </button>
        </div>
    )
}

export default ThemeChanger;