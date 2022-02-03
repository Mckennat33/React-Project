import React from "react"
import WeatherDisplay from "./WeatherDisplay";
import { useState, useEffect } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function SearchBar() {

// first goal
// Get the api/weather information on onto the page. 
// we want the weather to display for a random city. Then we want the weather to display for the city that is searched.
// What I am thinking is that we useEffect then so it fetched the data. Then when we search a new city it updated that fetch request with 
// the city that is subbed 

// look up useEffect and its second arguments. 


    const [ searchedCity, setSearchedCity ] = useState("Detroit")
    const [ weather, setWeather ] = useState('')

    useEffect(() => {
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchedCity}&days=3`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
        }
        })
        .then(res => res.json())
        .then(data => setSearchedCity(data))
        .catch(err => {
        console.error(err);
    });
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event)
    }


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
                onChange={e => setSearchedCity(e.target.value)}
                />
                <button>Submit</button>
            <WeatherDisplay />
            </form>
        </div>
    )
}

export default SearchBar;