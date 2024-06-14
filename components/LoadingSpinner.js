import { ClipLoader } from "react-spinners";
import style from "./WhetherDisplay.module.css";
const LoadingSpinner = () => (
  <div className={style.loadingSpinner}>
    <ClipLoader size={100} color="white" />
    <p>Fetching weather forcast...</p>
  </div>
);

export default LoadingSpinner;
