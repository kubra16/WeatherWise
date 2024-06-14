import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import WeatherProvider from "../../context/WeatherContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WeatherProvider>
        <Navbar />
        <div>
          <Search />
        </div>
      </WeatherProvider>
    </>
  );
}
