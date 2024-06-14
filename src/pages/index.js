import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import WeatherProvider from "../../context/WeatherContext";
import WeatherDisplay from "../../components/WeatherDisplay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WeatherProvider>
        <Navbar />
        <div>
          <Search />
          <WeatherDisplay />
        </div>
      </WeatherProvider>
    </>
  );
}
