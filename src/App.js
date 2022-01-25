import logo from './logo.svg';
import SearchBar from "./SearchBar"
import WeatherDisplay from "./WeatherDisplay"
import { useState, useEffect } from "react"
import './App.css';

function App() {

  const weatherAPI = "http://api.weatherstack.com/current?access_key=ea480034a53a0fca6f27d7a599482ae8&query=`${location}`"
useEffect(() => {
  fetch(weatherAPI)
  .then(resp => resp.json())
  .then(data => testFunction(data))
  .catch(err => console.log("err"))
}, [])

function testFunction(data) {
  console.log(data.current.weather_icons)
}


  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />
    </div>
  );
}

export default App;
