const OutputInterface = (props) => {
    return (
        <div className="rightItem flex flex-col min-[590px]:ml-[50px] items-center">
            <input onChange={(e) => props.setInputValue(e)} value={props.rightValue} type="number" placeholder="0"
                   min="0" max="999999"
                   className="max-w-[255px] mb-4 text-[40px] font-[Arial] text-center border border-black placeholder:text-center dark:bg-[#575757] dark:text-white dark:border-white"/>
            <select onChange={(e) => [props.setNewCurrency(e)]} value={props.leftCurrency}
                    className="w-[212px] h-[37px] text-[20px] text-[Jost] text-center border border-[#22A900] dark:bg-[#575757] dark:text-white dark:border-[#A0FF88]">
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
                <option value="EUR">EUR</option>
                <option value="PLN">PLN</option>
            </select>
        </div>
    )
}

export default OutputInterface;