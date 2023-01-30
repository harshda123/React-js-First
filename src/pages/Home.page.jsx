import React, { useEffect, useState } from "react";
import axios from "axios";

import EntertainmentCard from "../components/Entertainment/EntertainmentCard.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

import Defaultlayout from "../Hoc/Default.layout";

const HomePage = () => {
  const [recomendedMovies, setrecomendedMovies] = useState([]);
  const [premiumMovies, setrpremiuMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get(
        "/movie/popular"
      );
      setrpremiuMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopratedMovies = async () => {
      const getTopratedMovies = await axios.get(
        "/movie/upcoming"
      );
      setrecomendedMovies(getTopratedMovies.data.results);
    };
    requestTopratedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "/movie/top_rated"
      );
      setonlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
   
         <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recomended Movies"
          subTitle="List of recomended movies"
          posters={recomendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12 ">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <PosterSlider
              title="Premiers"
              subject="Brand New Releases every Friday"
              posters={premiumMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online streaming Events"
          subject="OSE"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default Defaultlayout(HomePage);
