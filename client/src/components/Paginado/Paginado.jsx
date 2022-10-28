import React from "react";
import style from "./paginado.module.css";

const Paginated = ({ videogames, paginated }) => {
  const numberPage = [];

  // Math.ceil redonde para arriba -> 100/15 --> 7
  for (let i = 0; i < Math.ceil(videogames / 15); i++) {
    numberPage.push(i + 1); // xq +1? sino me quedaba renderizado desde la pag 0, y si inicializaba en 1 me quedaba una pag menos
  }

  return (
    <div className={style.pag}>
      <nav>
        {numberPage &&
          numberPage.map((number) => {
            return (
              <button
                onClick={() => paginated(number)}
                className={style.number}
                key={number}
              >
                {number}
              </button>
            );
          })}
      </nav>
    </div>
  );
};

export default Paginated;
