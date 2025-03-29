import React, { useState, useEffect } from "react";
import { fetchWeather, fetchForecast } from "./api";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("weatherHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const fetchWeatherData = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const weatherData = await fetchWeather(city);
      const forecastData = await fetchForecast(city);

      setWeather(weatherData);
      const dailyForecast = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
      setForecast(dailyForecast);

      updateHistory(city);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateHistory = (city) => {
    const updatedHistory = [city, ...history.filter((c) => c !== city)].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem("weatherHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 transition 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gradient-to-br from-blue-200 to-indigo-300 text-gray-800"}`}>
      
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className={`p-6 rounded-xl shadow-xl w-full max-w-md transition 
        ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"}`}>
        
        <h1 className="text-3xl font-bold text-center mb-6">Weather Dashboard</h1>

        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter city name"
            className={`p-3 border rounded-lg w-full focus:outline-none focus:ring-2 transition
              ${darkMode ? "bg-gray-700 border-gray-600 focus:ring-blue-400 text-white" : "border-gray-300 focus:ring-blue-500"}`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeatherData()}
          />
          <button
            onClick={fetchWeatherData}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
        {weather && (
          <button
            onClick={fetchWeatherData}
            className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition w-full dark:bg-gray-500 dark:hover:bg-gray-400"
          >
            🔄 Refresh
          </button>
        )}

{loading && (
  <div className="flex justify-center mt-4">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)}

        {error && <p className="text-center text-red-600 mt-4">{error}</p>}

        {weather && (
          <motion.div className={`mt-6 p-6 rounded-lg shadow-lg text-center transition 
            ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-800"}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold">{weather.name}</h2>
            <p className="text-xl">{weather.main.temp}°C</p>
            <p>{weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} km/h</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="mx-auto mt-4"
            />
          </motion.div>
        )}
        {forecast && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-center">5-Day Forecast</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {forecast.map((day, index) => (
                <motion.div 
                  key={index} 
                  className={`p-4 rounded-lg shadow-md text-center transition 
                    ${darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-200 text-gray-800"}`}
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                >
                  <p className="font-bold">{new Date(day.dt_txt).toLocaleDateString()}</p>
                  <p>{day.main.temp}°C</p>
                  <p>{day.weather[0].description}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="Weather Icon"
                    className="mx-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
        <h3 className="mt-6 text-lg font-semibold">Recent Searches</h3>
        <ul className="mt-2">
          {history.map((city, index) => (
            <li key={index} className="cursor-pointer hover:underline" onClick={() => { setCity(city); fetchWeatherData(); }}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
