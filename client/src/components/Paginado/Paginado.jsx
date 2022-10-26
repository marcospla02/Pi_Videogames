import React from "react";
import style from "./paginado.module.css";

const Paginated = ({ videogamesPerPage, videogames, paginated }) => {
  const numberPage = [];

  for (let i = 0; i < Math.ceil(videogames / videogamesPerPage); i++) {
    numberPage.push(i + 1);
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
