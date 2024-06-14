import React, { useContext, useState } from "react";
import styles from "./Search.module.css";
import { WeatherContext } from "../context/WeatherContext";

const Search = () => {
  const { setCity, handleWeather } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setCity(input);
    handleWeather(input);
    localStorage.setItem("lastSearchCity", input);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a city name"
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default Search;
