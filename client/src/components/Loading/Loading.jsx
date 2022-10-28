import React from "react";
import marios from "../../images/mario-auto.gif";
import style from "./loading.module.css";

const Loading = () => {
  return (
    <div className={style.container}>
      <img src={marios} alt="cargado" className={style.loadingImg}></img>
    </div>
  );
};

export default Loading;
