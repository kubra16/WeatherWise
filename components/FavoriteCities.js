import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "./FavoriteCities.module.css";

const FavoriteCities = () => {
  const { favorites, removeFavorites, handleWeather } =
    useContext(WeatherContext);

  return (
    <>
      <div className={styles.favoritesContainer}>
        <h2>My favorite cities</h2>
        {favorites.length === 0 ? (
          <p className={styles.noData}>No favorite cities added</p>
        ) : (
          <ul className={styles.favoritesList}>
            {favorites.map((favorite) => (
              <li key={favorite.id} className={styles.favoriteItem}>
                <span
                  className={styles.cityName}
                  onClick={() => handleWeather(favorite.city)}
                >
                  {favorite.city}
                </span>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFavorites(favorite.city)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FavoriteCities;
