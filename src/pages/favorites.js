import React from "react";
import WeatherProvider from "../../context/WeatherContext";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import FavoriteCities from "../../components/FavoriteCities";
import WeatherDisplay from "../../components/WeatherDisplay";

const favorites = () => {
  return (
    <WeatherProvider>
      <div>
        <Navbar />
        <Head>
          <title>My Favorites - WeatherWise</title>
          <meta
            name="description"
            content="Your favorite cities' weather data."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <FavoriteCities />
          <WeatherDisplay />
        </main>
      </div>
    </WeatherProvider>
  );
};

export default favorites;
