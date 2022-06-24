import React from "react";

function PlainPage(props) {
    return (
        <div className="heading">
            <h1>No tours left</h1>
            <button onClick={props.refresh} className="btn">Refresh</button>
        </div>
    )
}

export default PlainPage;