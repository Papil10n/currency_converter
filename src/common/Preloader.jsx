import preloader from "./../assets/images/preloader.gif";

const Preloader = () => {
    return (
        <div className="w-11 text-center">
            <img className="w-full" src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;