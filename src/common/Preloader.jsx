import preloader from "./../assets/images/preloader.gif";

const Preloader = (props) => {
    return (
        <div className="w-11">
            <img className="w-full" src={preloader}/>
        </div>
    )
}

export default Preloader;