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
        <div className={style.containerTwo}>
          <div className={style.text}>
            This is a Web App made to show information about all videogames in
            the world, most of its information being taken from the RESTful API{" "}
            <a
              href="https://rawg.io/apidocs"
              rel="noreferrer"
              target="_blank"
              referencepolicy="no-referrer-when-downgrade"
              className={style.link}
            >
              RAWG
            </a>
            , and to create new videogames.
          </div>
          <div className={style.text}>
            This site was created as an Individual Project for{" "}
            <a
              href="https://www.soyhenry.com/"
              rel="noreferrer"
              target="_blank"
              referencepolicy="no-referrer-when-downgrade"
              className={style.link}
            >
              SoyHenry
            </a>
            's Full-Stack Web Development bootcamp, and as such, it was made
            following the set of directives listed below:
          </div>

          <div className={style.title}>General Precepts</div>
          <ul className={style.list}>
            <li>
              Current versions for all technologies used in the project could be
              updated at the risk of creating compatibility issues.
            </li>

            <li>
              No external libraries could be used for styling (such as
              Bootstrap). Pure CSS, CSS Modules and/or Styled Components had to
              be used instead.
            </li>
          </ul>

          <div className={style.title}>Data Base (PostegreSQL, Sequelize)</div>
          <ul className={style.list}>
            <li>
              Table Model for all videogames, with a record for each one
              containing at leas its ID, Name, Rating, Released, Image, Genres,
              Description & Platforms.
            </li>
            <li>
              Table Model for all activities, with a record for each one
              containing its ID & Name
            </li>
            <li>
              Relations Table between "Videogames" and "Genres" Models with a
              "many-to-many" cardinality.
            </li>
          </ul>
          <div className={style.title}>Back-End (NodeJs, Express)</div>
          <ul className={style.list}>
            <div className={style.sub_title}>Required routes:</div>
            <li>
              GET request to fetch all videogames' information from the RESTful
              API.
            </li>
            <li>
              GET request to obtain detailed information about a single
              videogame
            </li>
            <li>
              GET request to search countries by name through "lazy matching"
              (not exact name must be typed to show results).
            </li>
            <li>
              POST request to create new Videogames and save them in the Data
              Base.
            </li>
          </ul>
          <div className={style.title}>Front-End (React, Redux)</div>

          <ul className={style.list}>
            <div className={style.sub_title}>
              Required routes & UI components:
            </div>
            <li>
              Landing page introducing the site with a button to access the main
              component.
            </li>
            <li>
              Main component able to render all videogames (15 per page), with
              the option to order all results alphabetically or by rating,
              filter all results by their genres, created videogames or
              platforms, and a search bar to look up for individual videogames.
            </li>
            <li>
              Videogame details component containing at least, all the following
              information about each videogame: Name, Rating, Released, Image,
              Genres, Description & Platforms.
            </li>
            <li>
              Videogame creation form, fully controlled by React and with
              JavaScript-validated inputs, to create videogames with at leas,
              all the following information: Name, Rating, Released, Image,
              Genres, Description & Platforms
            </li>
          </ul>
        </div>
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
