import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="converter dark h-full">
            <div className="wrapper dark:bg-[#353535] w-screen h-screen">
                <div className="container min-h-full flex flex-col max-w-5xl my-0 mx-auto">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;