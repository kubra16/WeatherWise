import React, { useContext, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { WeatherContext } from "../context/WeatherContext";
import WhetherIcon from "./WhetherIcon";
import style from "./WhetherDisplay.module.css";
import UnitToggle from "./UnitToggle";

const WeatherDisplay = () => {
  const {
    loading,
    city,
    weather,
    forcast,
    addFavorite,
    favorites,
    units,
    convertTemperature,
  } = useContext(WeatherContext);
  const temperature = convertTemperature(weather.main.temp);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className={style.weatherContainer}>
        {weather && (
          <>
            <h2 className={style.weatherTitle}>Weather in {city}</h2>
            <div className={style.weatherDetails}>
              <p className={style.temperature}>
                Temperature: {temperature.toFixed(2)}°
                {units === "metric" ? "C" : "F"}
              </p>
              <UnitToggle />
              <p className={style.condition}>
                condition : {weather.weather[0].description}
              </p>
            </div>
            {favorites.some((fav) => fav.city === city) ? (
              <p className={style.condition}>{city} is already in favorites</p>
            ) : (
              <button
                className={style.button}
                onClick={() => addFavorite(city)}
              >
                Add {city} to favorites
              </button>
            )}
            <h3 className={style.temperature}>5 days Forecast</h3>
            <div className={style.forcast}>
              {forcast.map((day, index) => (
                <div key={index} className={style.forcastContainer}>
                  <p>{day.dt_txt}</p>
                  <p>Temp: {day.main.temp} </p>
                  <p>{day.weather[0].description}</p>
                  <>
                    <WhetherIcon weather={day.weather[0].main} />
                  </>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WeatherDisplay;
