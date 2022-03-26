import React from "react"
import WeatherDisplay from "./WeatherDisplay";
import { useState, useEffect } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import Item from "./Item"

function SearchBar() {
    const [ defaultWeather, setDefaultWeather ] = useState([])
    const [ searchedCity, setSearchedCity ] = useState('London') 
    const [ isLoaded, setIsLoaded ] = useState(false) 
    const [ input, setInput ] = useState('')


    const  searchWeather = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                'X-RapidAPI-Key': 'de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb'
            }
        };
        
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchedCity}&days=3`, options)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setDefaultWeather(data)
                setIsLoaded(true)
            })
            .catch(err => console.error(err));

    }

    useEffect(() => {
        searchWeather()        
    }, [searchedCity])
        
    
        
        function handleSubmit(e) {
            e.preventDefault()
            setSearchedCity(input)
            
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
                    onChange={e => setInput(e.target.value)}
                    />
                <div className="display">
                </div>
            </form>
        </div>

    )    



}


export default SearchBar;




// const searchWeather = () => {
//     fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchedCity}&days=3`, {
        
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
//             "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
//         }
//     }) 
//     .then((res) => res.json())
//     .then((data) => {
//         setDefaultWeather(data)
//         setIsLoaded(true)
//     })
//     .catch(err => {
//         console.error(err);
//     });
        
// } 