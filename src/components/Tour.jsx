import React from "react";

function Tour(props) {

    const [read, setRead] = React.useState(false)

    function handleClick () {
        setRead(!read)
    }

    return (
        <div  className="content">
            <img alt="pic" src={props.image} />
            <div className="data">
                <h2 className="name">{props.name}</h2>
                <p className="price">${props.price}</p>
                <p className="info">{read ? props.info : `${props.info.substring(0, 80)} ...`}
                    <button onClick={handleClick} className="btn1">{read ? `Read less` : `Read more`}</button>
                </p>
            </div>
            <button onClick={() => props.remove(props.id)} className="btn">Not interested</button>
        </div>
    )
}

export default Tour;