import { comment } from "postcss";
import React, { Component } from "react";
import MovieNavBar from "../components/Navbar/MovieNavBar.component";

const Movielayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavBar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default Movielayout;
