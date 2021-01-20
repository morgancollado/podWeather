import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import Forecast from './components/Forecast'

function App() {
  return (
    <div className="App">
    <h1>Weather App</h1>
      <SearchBar />
    </div>
  );
}

export default App;
