import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const [cityError, setcityError] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=daabf777cdf59bde5f098379c5521c0b`

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (location) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });

    }
  };

  return (
    <div className="app">
      <div className="weather-container">
        <div className="container">
          <header className="header">
            <h2>RAVI BHATT WEATHER API CODE ASSESMENT</h2>
          </header>
          <form onSubmit={handleSearch}>
            <div className="search">
              <input
                type="text"
                placeholder='Enter Location'
                type="search"
                value={location}
                onChange={handleChange}
              />
            </div>

          </form>
          
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
}
export default App;
