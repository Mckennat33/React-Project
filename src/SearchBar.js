import React from "react"
import WeatherDisplay from "./WeatherDisplay";
import { useState, useEffect } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function SearchBar() {
    const [ weather, setWeather ] = useState([])
    const [ defaultWeather, setDefaultWeather ] = useState({})
    const [ searchedCity, setSearchedCity ] = useState('') 
    const [ isLoaded, setIsLoaded ] = useState(false)

// ${searchedCity}

    {/* {x.map((city) => {
        console.log(city)
    })} */}

useEffect(() => {
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=LONDON&days=3`, {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
    }
    })
    .then((res) => res.json())
    .then(data => 
        setDefaultWeather(data),
        setIsLoaded(true)  
    )
    // .catch(err => {
    //     console.log(err) 
    // })
}, [])    
    
let defaultDisplay = Object.values(defaultWeather)
// console.log(defaultWeather)
// console.log(defaultWeather)

function handleSubmit(ev) {
        ev.preventDefault()
    }
    
if (!isLoaded) return <h3> ...</h3>;

// console.log(defaultDisplay)
// console.log(defaultWeather)
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
                    //onChange={e => setSearchedCity(e.target.value)}
                    />
                    <button>Submit</button>
                <div className="display">
                    <WeatherDisplay defaultDisplay={defaultDisplay} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;