import React from "react";
import Tour from "./Tour";

function Tours (props) {
    const showTours = props.tours.map(tour => {
        return <Tour 
            key={tour.id}
            {...tour}
            remove={props.remove}
        />
    })
    return (
        <div>
            <h1 className="heading">Our Tours</h1>
            {showTours}
        </div>
    )
}

export default Tours;