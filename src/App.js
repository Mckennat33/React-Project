import logo from './logo.svg';
import SearchBar from "./SearchBar"
import WeatherDisplay from "./WeatherDisplay"
import { useState, useEffect } from "react"
import './App.css';
import weather from "./weather.json"

function App() {

return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />
    </div>
  );
}

export default App;
