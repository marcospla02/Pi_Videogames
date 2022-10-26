import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const LandingPage = () => {
  return (
    <div className={style.landingPage}>
      <div className={style.lan}>
        <h1>Welcome</h1>
        <h2>Recover the different games</h2>
      </div>
      <Link to="/home">
        <button className={style.button}>Lets go!</button>
      </Link>
    </div>
  );
};

export default LandingPage;
