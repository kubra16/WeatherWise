import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "./FavoriteCities.module.css";

const FavoriteCities = () => {
  const { favorites, removeFavorites, fetchWeather } =
    useContext(WeatherContext);

  console.log(favorites);
  return (
    <>
      <div className={styles.favoritesContainer}>
        <h2>My favorite cities</h2>
        {favorites}
      </div>
    </>
  );
};

export default FavoriteCities;
