const InputInterface = (props) => {
    return (
        <div className="leftItem flex flex-col min-[590px]:mr-[50px] max-[590px]:mb-20 items-center">
            <input onChange={(e) => props.setInputValue(e)} value={props.leftValue} type="number" placeholder="0"
                   min="0" max="999999"
                   className="max-w-[255px] mb-4 text-[40px] font-[Arial] text-center border border-black placeholder:text-center dark:bg-[#575757] dark:text-white dark:border-white"/>
            <select onChange={(e) => [props.setNewCurrency(e)]} value={props.leftCurrency}
                    className="w-[212px] h-[37px] text-[20px] text-[Jost] text-center border border-[#22A900] dark:bg-[#575757] dark:text-white dark:border-[#A0FF88]">
                <option value="UAH">UAH</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="PLN">PLN</option>
            </select>
        </div>
    )
}

export default InputInterface;