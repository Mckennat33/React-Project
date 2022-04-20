import logo from './logo.svg';
import SearchBar from "./SearchBar"
import WeatherDisplay from "./WeatherDisplay"
import './App.css';
import weather from "./weather.json"
import Item from "./Item"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />

    </div>
  );
}




export default App;
