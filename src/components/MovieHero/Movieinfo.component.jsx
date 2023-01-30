import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/Movie.context";

const Movieinfo = () => {
  const [isOpen, setisOpen] = useState(false);
  const [price, setprice] = useState(0);

  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join("");

  const rentMovie = () => {
    setisOpen(true);
    setprice(149);
  };
  const buyMovie = () => {
    setisOpen(true);
    setprice(599);
  };

  return (
    <>
      {/* <PaymentModel setisOpen={setisOpen} isOpen={isOpen} price={price} /> */}
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">{movie.original_title}</h1>
        <div className="text-white flex flex-col gap-2">
          <h4> 4K rating</h4>
          <h4> Japanese, English, Hindi, Marathi</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 px-4 w-full">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg ">
              Rent INR149
            </button>
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg ">
              Buy INR599
            </button>
          </div>
      </div>
    </>
  );
};

export default Movieinfo;
