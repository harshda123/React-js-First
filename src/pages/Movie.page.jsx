import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Movielayout from "../Hoc/Movie.layout";
import { MovieContext } from "../context/Movie.context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/cast/Cast.Component";

const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setcast] = useState([]);
  const [SimilarMovies, setSimilarMovies] = useState([]);
  const [recomendedMovies, setrecomendeMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setcast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestrecomendedMovies = async () => {
      const getrecomendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setrecomendeMovies(getrecomendedMovies.data.results);
    };
    requestrecomendedMovies();
  }, []);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);

  const settingsCast = {
    infinite: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    SlidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          SlidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          SlidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl"> About The Movie</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8 ">
          <h2 className="text-gray-800 font-bold text-2xl my-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold ">
                  {" "}
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600 ">
                  Get 50% Off upto INR 150 on all RuPay card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold "> Film Pass</h3>
                <p className="text-gray-600 ">
                  Get 50% Off upto INR 150 on all RuPay card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* cast slider */}

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
          <hr />
        </div>

        <div className="my-8 ">
          <PosterSlider
            config={settings}
            title="Recomended Movies"
            posters={recomendedMovies}
            isDark={false}
          />
        </div>
        {/* recommended movies */}

        <div className="my-8">
          <hr />
        </div>
        <PosterSlider
          config={settings}
          title="BMS XCLUSIVE Movies"
          posters={recomendedMovies}
          isDark={false}
        />
      </div>
      <div className="my-8">
        <hr />
      </div>
    </>
  );
};

export default Movielayout(MoviePage);
