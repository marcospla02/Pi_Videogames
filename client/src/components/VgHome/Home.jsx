import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import VgCard from "../VgCard/Cards";
import { getAllVideogames } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Filtrado from "../Filtrado/Filtrado";
import Paginated from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.vgLoaded);
  const [order, setOrder] = useState(""); // me guarda el valor que se ingreso en el component Filtrado
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage; // 1*15 = 15 -> el indice del ultimo videojuego
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; // 15 - 15 me da 0, el indice del primer videojuego
  const fifteenVideogames = videogames.slice(
    // esta variable va a ir guardando los personajes que se tienen que renderizar, dependiendo de la pagina
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  useEffect(() => {
    dispatch(getAllVideogames());
  }, [dispatch]); //Son las dependecias

  const handlerClick = (event) => {
    event.preventDefault();
    dispatch(getAllVideogames());
    setCurrentPage(1);
  };

  const paginated = (number) => {
    setCurrentPage(number); // caundo cambie la pagina se cambian todos los indices
  };

  return (
    <div className={style.home}>
      <Link to="/about">
        <button className={style.buttons}>About</button>
      </Link>

      <SearchBar setCurrentPage={setCurrentPage} />
      <Link to="/create">
        <button className={style.buttons}>Create Videogame</button>
      </Link>
      <button onClick={(e) => handlerClick(e)} className={style.buttons}>
        Reset filters/games
      </button>
      <Filtrado setCurrentPage={setCurrentPage} setOrder={setOrder} />

      <Paginated
        paginated={paginated}
        videogamesPerPage={videogamesPerPage}
        videogames={videogames.length}
      />

      <div className={style.container}>
        {fifteenVideogames.length ? (
          fifteenVideogames.map((game) => {
            return (
              <div className={style.card}>
                <VgCard
                  id={game.id}
                  key={game.id}
                  // rating={game.rating}
                  img={game.img}
                  name={game.name}
                  genres={game.genres ? game.genres.join("/ ") : ""}
                />
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
