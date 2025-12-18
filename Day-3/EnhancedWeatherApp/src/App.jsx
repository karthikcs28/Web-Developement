import { useEffect, useState } from "react";
import "./App.css";

function EnhancedWeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "12101747de220235d821ee5d929861d8";

  useEffect(() => {
    if (!city.trim()) {
      setWeather(null);
      setError("");
      return;
    }

    const debounce = setTimeout(() => {
      fetchWeather(city);
    }, 600);

    return () => clearTimeout(debounce);
  }, [city]);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);

    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="app">
        <h2>Weather App</h2>

        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />

        {loading && <div className="spinner"></div>}
        {error && <p className="error">{error}</p>}

        {weather && !loading && !error && (
          <div className="weather-card">
            <h3>{weather.name}</h3>
            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p className="desc">{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnhancedWeatherApp;
