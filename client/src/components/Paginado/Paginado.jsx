import React from "react";
import style from "./paginado.module.css";

const Paginated = ({ videogames, paginated, currentPage }) => {
  const numberPage = [];

  // Math.ceil redonde para arriba -> 100/15 --> 7
  for (let i = 0; i < Math.ceil(videogames / 15); i++) {
    numberPage.push(i + 1); // xq +1? sino me quedaba renderizado desde la pag 0, y si inicializaba en 1 me quedaba una pag menos
  }

  const Page = (number) => {
    if (currentPage === number) return true;
    return false;
  };

  return (
    <div className={style.pag}>
      <nav className={style.containerNav}>
        {numberPage &&
          numberPage.map((number) => (
            <div key={number.toString()}>
              {Page(number) ? (
                <button
                  onClick={() => paginated(number)}
                  className={style.number}
                  key={number}
                >
                  {number}
                </button>
              ) : (
                <button
                  onClick={() => paginated(number)}
                  className={style.number2}
                  key={number}
                >
                  {number}
                </button>
              )}
            </div>
          ))}
      </nav>
    </div>
  );
};

export default Paginated;
