import React from "react"
import WeatherDisplay from "./WeatherDisplay";
import { useState } from "react"

function SearchBar({ search }) {
    const [ searched, setSearched ] = useState("")

    function searchCity() {
        console.log("Searching...")
    } 



    return (
        <div>
            <form className="search-form" onChange={searchCity}>
            <label>Search</label>
            <input text="text" id="search" value={searched} onChange={searchCity} />
            
            <WeatherDisplay />
            </form>

        </div>
    )
}

export default SearchBar;