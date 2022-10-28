import React from "react";
import { Link } from "react-router-dom";
import style from "./VgCard.module.css";
import foto from "../../images/fotoDeafult.jpg";

const VgCard = (props) => {
  return (
    <div className={style.vgCard}>
      <Link to={"/detail/" + props.id}>
        <img
          src={props.img ? props.img : foto}
          alt={`La imagen de ${props.name} no se encuentra disponible`}
          className={style.image}
        />
      </Link>
      <p> {props.name}</p>
      <p>{props.genres}</p>
    </div>
  );
};
export default VgCard;
