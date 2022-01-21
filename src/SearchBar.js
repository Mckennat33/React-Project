import React from "react"
import WeatherDisplay from "./WeatherDisplay";
import { useState } from "react"

function SearchBar() {
    const [ searched, setSearched ] = useState("Something")

    function searchCity() {
        console.log("Searching...")
    }
    return (
        <div>
            <form onChange={searchCity}>
            <label>Search</label>
            <input text="text" id="search" value={searched} onChange={e => setSearched(e.target.value)} />
            <WeatherDisplay />
            </form>

        </div>
    )
}

export default SearchBar;