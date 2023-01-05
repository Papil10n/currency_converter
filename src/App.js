import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="converter dark h-full">
            <div className="wrapper bg-[#C5C5C5] dark:bg-[#353535] w-screen h-screen">
                <div className="container min-h-full flex flex-col max-w-5xl my-0 mx-auto">
                    <HeaderContainer/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;