import React, { useState } from "react";
import { getByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./searchBar.module.css";

const SearchBar = () => {
  const [searchByName, setSearchByName] = useState("");
  const dispatch = useDispatch();

  const handlerChange = (event) => {
    event.preventDefault();
    setSearchByName(event.target.value);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    await dispatch(getByName(searchByName));
    event.target.reset();
  };

  return (
    <form
      onSubmit={(event) => handlerSubmit(event)}
      className={style.searchBar}
    >
      <input
        name="name"
        type="search"
        onChange={(event) => handlerChange(event)}
        placeholder="Search your videogame"
        autoComplete="off"
        className={style.input}
      ></input>
      <button onClick={() => getByName(searchByName)} className={style.button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
