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
import foto from "../../images/fotoDeafult.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.vgLoaded);
  const [order, setOrder] = useState(""); // me guarda el valor de los filtros para poder ordenarlos
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastVideogame = currentPage * 15; // 1*15 = 15 -> el indice del ultimo videojuego
  const indexOfFirstVideogame = indexOfLastVideogame - 15; // 15 - 15 me da 0, el indice del primer videojuego
  // guardo los personajes que se tienen que renderizar, (tiene los juegos de la pag actual)
  const fifteenVideogames = videogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paginated = (number) => {
    setCurrentPage(number); // cuando cambie la pagina se cambian todos los indices
  }; // ej: paginado 2 se va a setear la pagina en el 2 entonces cambia el estado por lo que se renderiza de nuevo

  useEffect(() => {
    dispatch(getAllVideogames());
  }, [dispatch]); //Son las dependecias

  const handlerClick = (event) => {
    event.preventDefault();
    dispatch(getAllVideogames());
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [videogames]);

  return (
    <div className={style.home}>
      <Link to="/about">
        <button className={style.buttons}>About</button>
      </Link>

      <SearchBar />
      <Link to="/create">
        <button className={style.buttons}>Create Videogame</button>
      </Link>

      <Filtrado setOrder={setOrder} setCurrentPage={setCurrentPage} />

      <Paginated
        paginated={paginated}
        videogames={videogames.length}
        currentPage={currentPage}
      />

      <div className={style.container}>
        {fifteenVideogames.length ? (
          fifteenVideogames.map((game) => {
            return (
              <div className={style.card}>
                <VgCard
                  id={game.id}
                  key={game.id}
                  img={game.img ? game.img : foto}
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
