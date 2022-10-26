import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
  const handler = () => {
    return (window.location.href = "https://www.linkedin.com/in/marcos-pla");
  };

  return (
    <div className={style.all}>
      <div className={style.container}>
        <h1>About me:</h1>
        <p>
          <p>Entusiasta de JavaScript, apasionado por la programación</p>
          <p>
            Quien soy? - <br />
            Mi nombre es Marcos Pla Señorans me encurntro en proceso de
            desarrollador Full Stack con muchas ganas de aprender siempre
            tecnologías nuevas para implementar, tratando siempre de realizar un
            trabajo limpio, para poder aportar a un equipo de trabajo.
          </p>
          <br />
          <p>
            Sobre mi - <br />
            Me considero una persona social, ordenada, me apasionan las nuevas
            relaciones y la comunicación clara. Disfruto de todo lo que
            aprendemos en el intercambio diario en los equipos de trabajo, tanto
            profesional, como humanamente. Soy muy extrovertido y valoro mucho
            las críticas constructivas en pos de seguir creciendo como
            profesional
          </p>
        </p>
        <button onClick={handler} className={style.linkedIn}>
          LinkedIn
        </button>
        <Link to="/home">
          <button className={style.button}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
