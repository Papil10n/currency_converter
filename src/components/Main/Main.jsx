const Main = () => {
    return (
        <main className="flex justify-center flex-auto ">
            <div className="cont flex">
                <div className="leftItem flex flex-col mr-[50px] items-center">
                    <input type="number" placeholder="0"
                           className="max-w-[255px] mb-4 text-[40px] font-[Arial] text-center border placeholder:text-center dark:bg-[#575757] dark:text-white dark:border-white"/>
                    <select defaultValue="UAH"
                            className="w-[212px] h-[37px] text-[20px] text-[Jost] text-center border dark:bg-[#575757] dark:text-white dark:border-[#A0FF88]">
                        <option value="UAH">UAH</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="rightItem flex flex-col ml-[50px] items-center">
                    <input type="number" placeholder="0"
                           className="max-w-[255px] mb-4 text-[40px] font-[Arial] text-center border placeholder:text-center dark:bg-[#575757] dark:text-white dark:border-white"/>
                    <select defaultValue="USD"
                            className="w-[212px] h-[37px] text-[20px] text-[Jost] text-center border dark:bg-[#575757] dark:text-white dark:border-[#A0FF88]">
                        <option value="UAH">UAH</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
            </div>
        </main>
    )
}

export default Main;