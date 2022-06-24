import React from "react";
import Load from "./Load"
import Tours from "./Tours"
import PlainPage from "./PlainPage";
//import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {

    const [load, setLoad] = React.useState(true)
    const [tours, setTours] = React.useState([])
    const [showPage, setShowPage] = React.useState(true)
    
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours);
    }
    //const navigate = React.useNavigate()

    const fetchTours = (() => 
         {
            setLoad(false)
            fetch("https://course-api.com/react-tours-project")
            .then(res => res.json())
            .then(data => setTours(data))
        }
    ) 

    React.useEffect(() => {
        fetchTours()
    }, [])

    function refresh() {
        return fetchTours()
    }

    // const navigateToContacts = () => {
    //     navigate('/Tours');
    //   };

    if(load) {
        return (
            <Load />
        )
    }

    return (
        <div>
            {tours.length !== 0 ? 
            <Tours 
                tours={tours}
                remove={removeTour}
            /> :
            <PlainPage 
                refresh={refresh}
            />}
            
        </div>
    )
}

export default App;