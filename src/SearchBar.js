import React from "react"
import WeatherDisplay from "./WeatherDisplay";
import { useState, useEffect } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function SearchBar() {
    const [ searchedCity, setSearchedCity ] = useState([])
    const [ weather, setWeather ] = useState('')
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ exampleState, setExampleState ] = useState([])

// ${searchedCity}

    useEffect(() => {
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=DETROIT&days=3`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
        }
        })
        .then(res => res.json())
        .then(data => 
            setSearchedCity(data),
            setIsLoaded(true)  
        )
        .catch(err => {
            console.log(err)
        })
    }, [])

    
    function handleSubmit(ev) {
        ev.preventDefault()
        console.log(searchedCity.current.condition.icon)
    }
    
    if (!isLoaded) return <h3>Loading...</h3>;
    
    return (
        <div>
            <form 
            className="search-form"
            onSubmit={handleSubmit}
            >
            <label>Search</label>
                <input 
                text="text" 
                id="search"
                // onChange={e => setSearchedCity(e.target.value)}
                />
                <button>Submit</button>
            {/* {searchedCity.map((city) => {
                console.log(city.location)
                // getting an error that .map is not a function - because the data we are fetching is not an array 
                // Have to figure out a way to convert it to an array or make another type of change to this. sd
            })} */}

            <WeatherDisplay />
            </form>
        </div>
    )
}

export default SearchBar;