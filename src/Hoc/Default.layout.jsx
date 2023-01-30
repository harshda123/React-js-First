import React, { Component } from "react";
import NavBar from "../components/Navbar/NavBar.Component";
const Defaultlayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavBar/>
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };
export default Defaultlayout;
