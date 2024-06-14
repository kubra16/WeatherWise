import React from "react";
import Cloudy from "../svg/Cloudy.svg";
import Haze from "../svg/cloudysunny.svg";
import Rainny from "../svg/Rainny.svg";
import LightRain from "../svg/LightRain.svg";
import Sunny from "../svg/Sunny.svg";
const WhetherIcon = ({ weather }) => {
  console.log(weather);
  const getwhetherIcon = (weather) => {
    if (weather.includes("Clouds")) {
      return <Cloudy />;
    } else if (weather.includes("light rain")) {
      return <LightRain />;
    } else if (weather.includes("Haze")) {
      return <Haze />;
    } else if (weather.includes("Clear")) {
      return <Sunny />;
    } else return <Rainny />;
  };
  return <div>{getwhetherIcon(weather)}</div>;
};

export default WhetherIcon;
