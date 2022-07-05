import starImg from "./images/star.png"

function Card(props) {
    return (
        <div className="card-component">
            <img src={require(`./images/${props.img}`)}></img>
            <div className="card-rating-div">
                <img src={starImg}></img>
                <p>{props.rating}</p>
                <p className="revCount">({props.revCount})</p>
                <p className="location">{props.location}</p>
            </div>
            <div className="card-data-div">
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div> )
}

export default Card