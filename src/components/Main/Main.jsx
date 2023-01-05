import InputInterfaceContainer from "./InputInterface/InputInterfaceContainer";
import OutputInterfaceContainer from "./OutputInterface/OutputInterfaceContainer";

const Main = () => {
    return (
        <main className="flex justify-center flex-auto mb-20">
            <div className="cont flex max-[590px]:flex-col justify-center items-center">
                <InputInterfaceContainer/>
                <OutputInterfaceContainer/>
            </div>
        </main>
    )
}

export default Main;