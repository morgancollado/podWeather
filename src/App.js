import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import Forecast from './components/Forecast'
import Main from './components/main'

function App() {
  return (
    <div className="App">
    <h1>Weather App</h1>
      <SearchBar />
      <Main/>
    </div>
  );
}

export default App;
