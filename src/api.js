import axios from "axios";
const API_KEY =process.env.REACT_APP_WEATHER_KEY;

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Unable to fetch weather data.");
    }
    throw new Error("Network error. Please try again.");
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Unable to fetch forecast data.");
    }
    throw new Error("Network error. Please try again.");
  }
};
