import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanDetail, getVgDetail } from "../../redux/actions";
import Loading from "../Loading/Loading";
import style from "./detail.module.css";
import foto from "../../images/fotoDeafult.jpg";

const VgDetail = (props) => {
  const dispatch = useDispatch();
  let vgDetail = useSelector((state) => state.vgDetail);
  const videogameId = props.match.params.id;

  useEffect(() => {
    dispatch(getVgDetail(videogameId));

    return () => {
      dispatch(cleanDetail()); // para que se limpie el estado de detalle cuando lo saco y caundo aprete otro se ponga el nuevo y no qeude ese dilay del anterior
    };
  }, [dispatch, videogameId]);

  if (Array.isArray(vgDetail)) {
    // el detalle de los creados me venia en un array
    vgDetail = vgDetail.find((videogame) => {
      return videogame;
    });
  }

  if (vgDetail.genres || vgDetail.platforms) {
    var gen = vgDetail.genres.join(" - ");
    var platform = vgDetail.platforms.join(" - ");
  }

  if (vgDetail.description) {
    var description = vgDetail.description.split("<p>").join("");
    description = description.split("</p>").join(" ");
    description = description.split("<br>").join(" ");
    description = description.split("</br>").join(" ");
    description = description.split("<br />").join(" ");
  }

  return (
    <div className={style.detail}>
      {Object.keys(vgDetail).length === 0 ? (
        <Loading />
      ) : (
        <div className={style.losDos}>
          <div className={style.divImg}>
            <img
              src={vgDetail.img ? vgDetail.img : foto}
              className={style.img}
              alt={`image game ${vgDetail.name}`}
            ></img>
          </div>
          <div className={style.divInfo}>
            <p>
              <strong> {vgDetail.name}</strong>
            </p>
            <p>
              <strong> {vgDetail.rating}</strong>
            </p>
            <p>
              <strong>{vgDetail.released}</strong>
            </p>
            <p>
              <strong> {gen}</strong>
            </p>
            <p>
              <strong> {platform}</strong>
            </p>
            <div className={style.description}>
              <strong> {description}</strong>
            </div>
            <br />
            <Link to="/home">
              <button className={style.button}>Back</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default VgDetail;
