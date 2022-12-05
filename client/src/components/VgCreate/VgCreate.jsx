import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createVideogame, getGenres } from "../../redux/actions";
import style from "./create.module.css";

const VgCreate = () => {
  const dispatch = useDispatch();
  const vgGenres = useSelector((state) => state.vgGenres);
  const vgPlatforms = useSelector((state) => state.vgPlatforms);
  const regExpDescription = /^.{1,255}$/; // no mas de 255
  const regExpName = /^[A-Za-z0-9\s]+$/g; // no acepta caracteres especiales

  const [disable, setDisable] = useState({
    genre: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    rating: "",
    description: "",
    platforms: "",
  });

  const [input, setInput] = useState({
    name: "",
    rating: 0,
    released: "",
    img: "",
    description: "",
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handlerChange = (e) => {
    // img y released
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlerName = (event) => {
    event.preventDefault();

    // trim-> elimina espacio en blanco
    event.target.value.trim() === ""
      ? setErrors({
          ...errors,
          name: "The name is required",
        })
      : !regExpName.test(event.target.value)
      ? setErrors({
          ...errors,
          name: "No special characters",
        })
      : setErrors({ ...errors, name: "" });

    setInput({ ...input, name: event.target.value });
  };

  const hanlderRating = (event) => {
    event.preventDefault();
    event.target.value < 0 || event.target.value > 5
      ? setErrors({
          ...errors,
          rating: "The rating must be between 0 and 5",
        })
      : setErrors({ ...errors, rating: "" });

    setInput({ ...input, rating: event.target.value });
  };

  const handlerDescription = (event) => {
    event.preventDefault();
    event.target.value.trim() === ""
      ? setErrors({
          ...errors,
          description: "The description is required",
        })
      : !regExpDescription.test(event.target.value)
      ? setErrors({
          ...errors,
          description: "Cannot exceed 255 characters",
        })
      : setErrors({ ...errors, description: "" });

    setInput({ ...input, description: event.target.value });
  };

  const handlerSelect = (event) => {
    if (!input.genres.find((gen) => gen == event.target.value)) {
      if (input.genres.length >= 3) {
        setDisable({ ...disable, genre: true });
      }
      setInput({
        ...input,
        genres: [...input.genres, event.target.value],
      });
    }
  };

  const handlerSelectPlatform = (event) => {
    if (!input.platforms.find((plat) => plat == event.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, event.target.value],
      });
    }
  };

  const handlerSubmit = () => {
    if (
      !errors.name &&
      input.name !== "" &&
      !errors.description &&
      input.description !== "" &&
      !errors.rating &&
      input.platforms.length > 0
    ) {
      dispatch(createVideogame(input));
      alert("Videogame Created");
    } else {
      alert("'Missing to send mandatory data' OR 'Some mistake in the fields'");
    }
  };

  const handlerDelete = (name) => {
    const genreFilter = input.genres.filter((elem) => elem !== name);
    setInput({ ...input, genres: genreFilter });
  };
  const handlerDeleteP = (name) => {
    const platformFilter = input.platforms.filter((elem) => elem !== name);
    setInput({ ...input, platforms: platformFilter });
  };

  return (
    <div className={style.body}>
      <div className={style.all}>
        <h2>Create your video game!</h2>
        <div className={style.form}>
          <form onSubmit={(event) => handlerSubmit(event)}>
            <div>
              <label htmlFor="name">Name*: </label>
              <input
                name="name"
                value={input.name} // para que sea mas controlado el form
                onChange={(event) => handlerName(event)}
                placeholder="Nombre del juego"
                className={style.input}
              />

              {errors.name && <span>{errors.name}</span>}
              <br />

              <label htmlFor="rating">Rating: </label>
              <input
                name="rating"
                value={input.rating}
                onChange={(e) => hanlderRating(e)}
                type="number"
                placeholder="0-5"
                className={style.input}
              />
              <br />
              {errors.rating && <span>{errors.rating}</span>}
              <br />

              <label htmlFor="released">Released: </label>
              <input
                name="released"
                type="date"
                onChange={(e) => handlerChange(e)}
                className={style.input}
              />

              <div>
                <label htmlFor="img">Image: </label>
                <input
                  name="img"
                  value={input.img}
                  onChange={(e) => handlerChange(e)}
                  type="text"
                  className={style.img}
                ></input>
              </div>

              <div>
                <label>Genres: </label>
                <select
                  disabled={input.genres.length > 3 ? disable.genre : false}
                  onChange={(e) => handlerSelect(e)}
                  className={style.select}
                >
                  <optgroup label="Genres">
                    {vgGenres.map((genre) => {
                      return (
                        <option value={genre.name} key={genre.id}>
                          {genre.name}
                        </option>
                      );
                    })}
                  </optgroup>
                </select>
              </div>
              <br />

              <label htmlFor="description">Description*: </label>
              <input
                name="description"
                value={input.description}
                onChange={(event) => handlerDescription(event)}
                placeholder="descripcion"
                className={style.input}
              />
              <br />
              {errors.description && <span>{errors.description}</span>}
              <div>
                <label>Platforms*: </label>
                <select
                  onChange={(event) => handlerSelectPlatform(event)}
                  className={style.select}
                >
                  <optgroup label="Platforms">
                    {vgPlatforms.map((platform) => {
                      return (
                        <option value={platform} key={platform}>
                          {platform}
                        </option>
                      );
                    })}
                  </optgroup>
                </select>
                <legend className={style.leyend}>
                  Platforms must have at least 1
                </legend>
              </div>
              <br />
              <legend className={style.leyend}>
                All fields with * are required
              </legend>

              <button
                type="submit"
                className={errors.err ? style.error : style.button}
              >
                Create
              </button>
              <Link to="/home">
                <button className={style.back}>Back</button>
              </Link>
            </div>
          </form>
        </div>

        <div className={style.losDos}>
          <div className={style.allGenre}>
            Genres:
            <br />
            {input.genres.map((gen) => (
              <div className={style.genre}>
                {gen}
                <button
                  onClick={() => handlerDelete(gen)}
                  className={style.buttonInput}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <br />
          <div className={style.allPlatform}>
            Platforms:
            <br />
            {input.platforms.map((pls) => (
              <div className={style.platform}>
                {pls}
                <button
                  onClick={() => handlerDeleteP(pls)}
                  className={style.buttonInput}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VgCreate;
