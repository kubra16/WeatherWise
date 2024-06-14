import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "./UnitToggle.module.css";

const UnitToggle = () => {
  const { units, setUnits, toggleUnits } = useContext(WeatherContext);
  const toggleUnit = () => {
    const newUnit = units === "metric" ? "imperial" : "metric";
    setUnits(newUnit);
  };
  return (
    <div className={styles.unitToggle}>
      <button onClick={toggleUnit}>
        Switch to {units === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
};

export default UnitToggle;
