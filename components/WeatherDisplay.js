import React, { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { WeatherContext } from "../context/WeatherContext";
import WhetherIcon from "./WhetherIcon";
import style from "./WhetherDisplay.module.css";

const WeatherDisplay = () => {
  const { loading, city, weather, forcast, addFavorite } =
    useContext(WeatherContext);

  console.log(weather?.weather[0]?.main);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className={style.weatherContainer}>
        {weather && (
          <>
            <h2>Weather in {city}</h2>
            <div>
              <p>Temerature : {weather.main.temp}°</p>
              <p>condition : {weather.weather[0].description}</p>
            </div>
            <button onClick={() => addFavorite(city)}>
              Add {city} to favorites
            </button>
            <h3>5 day Forecast</h3>
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
