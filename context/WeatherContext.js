import axios from "axios";
import { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forcast, setForcast] = useState([]);
  const [error, setError] = useState("");

  const handleWeather = async (city) => {
    console.log("clciked");
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    setLoading(true);
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const forcastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );
      console.log(forcastResponse);
      setForcast(forcastResponse);
      setWeather(weatherResponse.data);
    } catch {}
  };

  return (
    <WeatherContext.Provider value={{ city, setCity, handleWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
