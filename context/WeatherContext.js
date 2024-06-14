import axios from "axios";
import { createContext, useEffect, useState } from "react";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forcast, setForcast] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      handleWeather(lastCity);
    }
    fetchFavorites();
  }, []);

  const handleWeather = async (city) => {
    setLoading(true);
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const forcastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );
      console.log(forcastResponse);
      setForcast(forcastResponse.data.list);
      setWeather(weatherResponse.data);
    } catch {
      console.error("Error fetching weather data:", error);
      setError("Could not fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:5000/favorites");
      setFavorites(response.data);
      console.log(response);
    } catch (err) {
      console.log("Error fetching favorite cities", error);
    }
  };

  const addFavorite = async (cityName) => {
    try {
      await axios.post("http://localhost:5000/favorites", { city: cityName });
      fetchFavorites();
    } catch (error) {
      console.error("Error adding favorite city:", error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        handleWeather,
        forcast,
        weather,
        loading,
        addFavorite,
        fetchFavorites,
        favorites,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
