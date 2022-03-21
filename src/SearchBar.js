import React from "react"
// import WeatherDisplay from "./WeatherDisplay";
import { useState, useEffect } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import Item from "./Item"

function SearchBar() {
    const [location, setLocation] = useState('')
    const [ defaultWeather, setDefaultWeather ] = useState([])
    const [ searchedCity, setSearchedCity ] = useState('') 
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [didMount, setDidMount] = useState(false); 

    const searchWeather = () => {
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=LONDON&days=3`, {
            
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
            }
        }) 
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            let newData = Object.values(data)
            setDefaultWeather(newData)
            setIsLoaded(true)
        })
        .catch(err => {
            console.error(err);
        });
            
    } 

        useEffect(() => {
            searchWeather()
        }, [])
        
        
        function handleSubmit(ev) {
            ev.preventDefault()
        }    

        console.log(defaultWeather)
        
        if (!isLoaded) return  <h3>Loading...</h3>;
        
        

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
                    {defaultWeather.map((weather, index) => {
                        return (
                            <ul key={index}>
                                <li>{"Hello", "Hi"}</li>
                            </ul>
                        )
                    })}
                </div>
            </form>
        </div>
    )    
}


export default SearchBar;


    // fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=LONDON&days=3`, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        //         "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
        //     }
        // })
        // .then((res) => res.json())
        // .then(data => 
        //     setDefaultWeather(data.current),
        //     setIsLoaded(true), 
        //     setDidMount(true)
        //     )
        //     .catch((err => {
        //         console.log("ERROR")
        //         console.log(err)
        //     }))



// //    const searchWeather = () => {
//     fetch("https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
//             "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
//             }
//     })
//         .then(response => {
//                 return response.json();
//             })