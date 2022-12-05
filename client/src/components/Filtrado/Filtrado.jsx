import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCreate,
  filterByPlatform,
  filterVideogameByGenre,
  getAllVideogames,
  orderAlphabetical,
  orderByRating,
} from "../../redux/actions";
import style from "./Filtrado.module.css";

const Filtrado = ({ setOrder, setCurrentPage }) => {
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

  const handlerClick = (event) => {
    event.preventDefault();
    dispatch(getAllVideogames());
    document.getElementById("all").selectedIndex = 0;
    document.getElementById("all1").selectedIndex = 0;
    document.getElementById("all2").selectedIndex = 0;
    document.getElementById("all3").selectedIndex = 0;
    document.getElementById("all4").selectedIndex = 0;
    setCurrentPage(1);
  };

  return (
    <div className={style.all}>
      <div className={style.containerButton}>
        <button
          onClick={(e) => handlerClick(e)}
          className={style.buttonsFilter}
        >
          Reset filters/games
        </button>
      </div>
      <select
        onChange={(event) => changeHandlerCreate(event)}
        className={style.filters}
        id="all"
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
        id="all1"
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
        id="all2"
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
        id="all3"
      >
        <optgroup label="Rating ">
          <option value="max">Max</option>
          <option value="min">Min</option>
        </optgroup>
      </select>
      <select
        onChange={(event) => handlerSortAlphabetical(event)}
        className={style.filters}
        id="all4"
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
