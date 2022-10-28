import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCreate,
  filterByPlatform,
  filterVideogameByGenre,
  orderAlphabetical,
  orderByRating,
} from "../../redux/actions";
import style from "./Filtrado.module.css";

const Filtrado = ({ setOrder }) => {
  const dispatch = useDispatch();
  const vgLoaded = useSelector((state) => state.vgLoaded);

  const handlerSortAlphabetical = (event) => {
    event.preventDefault();
    dispatch(orderAlphabetical(event.target.value));
    setOrder(event.target.value);
  };

  const handlerSortRating = (event) => {
    event.preventDefault();
    dispatch(orderByRating(event.target.value));
    setOrder(event.target.value);
  };

  const changeHandlerGenre = (event) => {
    event.preventDefault();
    dispatch(filterVideogameByGenre(event.target.value));
    setOrder(event.target.value);
  };

  const changeHandlerCreate = (event) => {
    event.preventDefault();
    dispatch(filterByCreate(event.target.value));
    setOrder(event.target.value);
  };

  const changeHandlerPlatform = (event) => {
    event.preventDefault();
    dispatch(filterByPlatform(event.target.value));
    setOrder(event.target.value);
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
        onChange={(event) => changeHandlerGenre(event)}
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
        onChange={(e) => changeHandlerPlatform(e)}
        className={style.filters}
      >
        <optgroup label="Platforms">
          <option value="all">All</option>
          <option value="PC">PC</option>,
          <option value="Xbox One">Xbox One</option>,
          <option value="Xbox 360">Xbox 360</option>,
          <option value="Xbox Series S/X">Xbox Series S/X</option>,
          <option value="Xbox">Xbox</option>,
          <option value="PlayStation 5">PlayStation 5</option>,
          <option value="PlayStation 4">PlayStation 4</option>,
          <option value="PlayStation 3">PlayStation 3</option>,
          <option value="PlayStation 2">PlayStation 2</option>,
          <option value="Nintendo Switch">Nintendo Switch</option>,
          <option value="iOS">iOS</option>,
          <option value="Android">Android</option>,
          <option value="macOS">macOS</option>,
          <option value="Linux">Linux</option>,
        </optgroup>
      </select>

      <select
        onChange={(event) => handlerSortRating(event)}
        className={style.filters}
      >
        <optgroup label="Rating ">
          <option value="all">All</option>
          <option value="max">Max</option>
          <option value="min">Min</option>
        </optgroup>
      </select>
      <select
        onChange={(event) => handlerSortAlphabetical(event)}
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
