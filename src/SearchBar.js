import React from "react"
import WeatherDisplay from "./WeatherDisplay";
import { useState } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function SearchBar({ onSearchChange }) {
    

    function searchCity(event) {
        console.log(event)
    } 



    return (
        <div>
            <form 
            className="search-form">
            <label>Search</label>
                <input 
                text="text" 
                id="search"
                onChange={e => searchCity(e.target.value)}
                />
            <WeatherDisplay />
            </form>

        </div>
    )
}

export default SearchBar;