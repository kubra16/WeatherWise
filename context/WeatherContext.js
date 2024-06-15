import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forcast, setForcast] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const lastCity = localStorage.getItem("lastSearchCity");
    console.log(lastCity, "last");
    if (lastCity) {
      handleWeather(lastCity);
    }
    fetchFavorites();
  }, []);

  const handleWeather = async (city) => {
    setLoading(true);
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`
      );
      setCity(city);
      setForcast(forecastResponse.data.list);
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
      toast.success(`${cityName} added to favorites!`);
    } catch (error) {
      console.error("Error adding favorite city:", error);
      toast.error("Error adding favorite city. Please try again.");
    }
  };

  const removeFavorites = async (cityName) => {
    try {
      const response = await axios.get("http://localhost:5000/favorites");
      const favorite = response.data.find((fav) => fav.city === cityName);
      if (favorite) {
        await axios.delete(`http://localhost:5000/favorites/${favorite.id}`);
        fetchFavorites();
        toast.success(`${cityName} removed from favorites!`);
      }
    } catch (error) {
      console.log("error removing favorite city");
      toast.error("Error removing favorite city. Please try again.");
    }
  };

  const convertTemperature = (temp) => {
    return units === "metric" ? temp : (temp * 9) / 5 + 32;
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
        error,
        setError,
        addFavorite,
        fetchFavorites,
        removeFavorites,
        favorites,
        units,
        setUnits,
        convertTemperature,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
