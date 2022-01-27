import logo from './logo.svg';
import SearchBar from "./SearchBar"
import WeatherDisplay from "./WeatherDisplay"
import { useState, useEffect } from "react"
import './App.css';
import weather from "./weather.json"

function App() {
//   const weatherAPI = "http://api.weatherstack.com/current?access_key=ea480034a53a0fca6f27d7a599482ae8&query=`${location}`"
useEffect(() => {
  fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
      "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
    }
  })
  .then(response => response.json())
  .then(data => testFunction(data))
  .catch(err => {
    console.error(err);
  });
}, [])


function testFunction(data) {
  console.log(data)
}
testFunction(weather)

return (
    <div className="App">
      <h1>Weather App</h1>
      {/* <SearchBar search={testFunction} /> */}
    </div>
  );
}

export default App;
