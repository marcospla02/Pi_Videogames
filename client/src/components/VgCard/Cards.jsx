import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { deleteCard } from "../../redux/actions";
import style from "./VgCard.module.css";

const VgCard = (props) => {
  return (
    <div className={style.vgCard}>
      <Link to={"/detail/" + props.id}>
        <img
          src={props.img}
          alt={`La imagen de ${props.name} no se encuentra disponible`}
          className={style.image}
        />
      </Link>
      <p> {props.name}</p>
      <p className={style.released}>{props.released}</p>
      <p className={style.rating}>{props.rating}</p>
      <p>{props.genres}</p>
      <p className={style.name}>{props.platforms}</p>
      <p>{props.description}</p>
    </div>
  );
};
export default VgCard;
