import React from "react";
import WeatherProvider from "../../context/WeatherContext";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import FavoriteCities from "../../components/FavoriteCities";

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
          {/* <UnitToggle /> */}
          <FavoriteCities />
        </main>
      </div>
    </WeatherProvider>
  );
};

export default favorites;
