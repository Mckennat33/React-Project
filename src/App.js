import logo from './logo.svg';
import SearchBar from "./SearchBar"
import WeatherDisplay from "./WeatherDisplay"
import { useState, useEffect } from "react"
import './App.css';
import weather from "./weather.json"

function App() {
//   const weatherAPI = "http://api.weatherstack.com/current?access_key=ea480034a53a0fca6f27d7a599482ae8&query=`${location}`"

// const goodWeatherAPI = "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5"
const [ searchedCity, setSearchedCity ] = useState("Detroit")

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



  function handleSearchChange(city) {
    console.log(city)
}

return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearchChange={handleSearchChange}  />
    </div>
  );
}

export default App;
