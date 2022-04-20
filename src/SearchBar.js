import React from "react"
import WeatherDisplay from "./WeatherDisplay";
import { useState, useEffect } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import Item from "./Item"
import 'bootstrap/dist/css/bootstrap.css';

function SearchBar() {
    const [ defaultWeather, setDefaultWeather ] = useState([])
    const [ searchedCity, setSearchedCity ] = useState('London') 
    // const [ isLoaded, setIsLoaded ] = useState(false) 
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
                // console.log(data)
                setDefaultWeather(data)
                // setIsLoaded(true)
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

        const weather = Object.entries(defaultWeather).map((weather) => weather)
        // .map((weather) => weather);
        
    return (
            <div>
            <form 
            className="search-form"
            onSubmit={handleSubmit}
            >
                <label>Search</label>
                    <input 
                    type="text" 
                    id="search"
                    onChange={e => setInput(e.target.value)}
                    />
                <div className="display">
                {/* {defaultWeather ? <p>{defaultWeather?.location?.name}</p> : null } */}
                    {weather ?
                    weather.map((getWeather, index) => (
                        <div key={index}>
                            <div className="top-location">
                                <p>{getWeather[1].name}</p>
                                <p>{getWeather[1].region}</p>
                            </div>

                            <div className="left-condition">
                                <p>{getWeather[1].condition?.icon}</p>
                                {/* <p>{console.log(getWeather[1].condition?.icon)}</p> */}
                            </div>
                            
                            <div className="middle-temp">
                                <p>{getWeather[1].feelslike_f}</p>
                                {/* need to come back to this to put the Fahrenheit to the display */}
                            </div>
                            <div className="right-info">
                                <p>{getWeather[1].precip_in}</p>
                                {/* add a percentage to precip */}
                                <p>{getWeather[1].humidity}</p>
                                {/* add percentage in humidity */}
                                <p>{getWeather[1].gust_mph}</p>
                                {/* need to add mph */}
                            </div>
                            <div className="bottom-three-day-forecast">
                                {/* Date icon temp */}
                                {/* <p>{getWeather[1].forecastday?.astro?.moonrise}</p> */}
                            </div>
                
                        </div>
                        ))
                : 
                    null
                }
                
                </div>
            </form>
        </div>

    )    

}


export default SearchBar;
