import ExpImg from "./images/photo-grid.png"

function Image() {
    return (
        <div className="img-div">
            <img className="grid-img" src={ExpImg} alt="Experience images"></img>
            <div className="img-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Image