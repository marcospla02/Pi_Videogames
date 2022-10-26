import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCreate,
  filterVideogameByGenre,
  orderAlphabetical,
  orderByRating,
} from "../../redux/actions";
import style from "./Filtrado.module.css";

const Filtrado = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();
  const vgLoaded = useSelector((state) => state.vgLoaded);

  const handlerSort = (event) => {
    event.preventDefault();
    dispatch(orderAlphabetical(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
  };

  const changeHandlerRating = (event) => {
    event.preventDefault();
    dispatch(orderByRating(event.target.value));
    setCurrentPage(1);
    setOrder(event.target.value);
  };

  const changeHandler = (event) => {
    dispatch(filterVideogameByGenre(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
  };

  const changeHandlerCreate = (event) => {
    dispatch(filterByCreate(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={style.all}>
      <select
        onChange={(event) => changeHandlerCreate(event)}
        className={style.filters}
      >
        <optgroup label="Games">
          <option value="all">All</option>
          <option value="createdInDb">Create</option>
          <option value="existing">Existing</option>
        </optgroup>
      </select>
      <select
        onChange={(event) => changeHandler(event)}
        className={style.filters}
      >
        <optgroup label="Genres">
          <option value="All">All Genres</option>
          <option value="RPG">RPG</option>
          <option value="Shooter">Shooter</option>
          <option value="Platformer">Platformer</option>
          <option value="Family">Family</option>
          <option value="Adventure">Adventure</option>
          <option value="Arcade">Arcade</option>
          <option value="Fighting">Fighting</option>
          <option value="Action">Action</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Board Games">Board Games</option>
          <option value="Indie">Indie</option>
          <option value="Casual">Casual</option>
          <option value="Card">Card</option>
          <option value="Strategy">Strategy</option>
          <option value="Simulation">Simulation</option>
          <option value="Racing">Racing</option>
          <option value="Educational">Educational</option>
          <option value="Sports">Sports</option>
        </optgroup>
      </select>
      <select
        onChange={(event) => changeHandlerRating(event)}
        className={style.filters}
      >
        <optgroup label="Rating ">
          <option value="all">All</option>
          <option value="max">Max</option>
          <option value="min">Min</option>
        </optgroup>
      </select>
      <select
        onChange={(event) => handlerSort(event)}
        className={style.filters}
      >
        <optgroup label="Alphabetical">
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Filtrado;
