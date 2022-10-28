import axios from "axios";
export const GET_ALL_VIDEOGAME = "GET_ALL_VIDEOGAMES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_GENRES = "GET_GENRES";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const FILTER_BY_CREATE = "FILTER_BY_CREATE";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_A_Z = "ORDER_BY_A_Z";
export const SET_LOADING = "SET_LOADING";
export const SET_PAGE = "SET_PAGE";
export const LOADING_PAGE = "LOADING_PAGE";
// export const ERROR = "ERROR";
export const FILTER_BY_PLATFORMS = "FILTER_BY_PLATFORMS";

export const getAllVideogames = () => (dispatch) => {
  return axios
    .get("http://localhost:3001/videogames")
    .then((res) => dispatch({ type: GET_ALL_VIDEOGAME, payload: res.data }))
    .catch(
      (err) => console.log(err.response.data)
      //dispatch({ type: ERROR, payload: err.response.data })
    );
};

export const getByName = (name) => (dispatch) => {
  return axios
    .get(`http://localhost:3001/videogames?name=${name}`)
    .then((res) => dispatch({ type: GET_BY_NAME, payload: res.data }))
    .catch(
      (err) => console.log(err.response.data)
      //dispatch({ type: ERROR, payload: err.response.data })
    );
};

export const getVgDetail = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:3001/vgId/${id}`)
    .then((res) => dispatch({ type: GET_VIDEOGAME_DETAIL, payload: res.data }))
    .catch(
      (err) => console.log(err.response.data)
      //dispatch({ type: ERROR, payload: err.response.data })
    );
};

export const createVideogame = (value) => (dispatch) => {
  return axios
    .post("http://localhost:3001/videogames", value)
    .then((res) => dispatch({ type: CREATE_VIDEOGAME, payload: res.data }))
    .catch(
      (err) => console.log(err.response.data)
      //dispatch({ type: ERROR, payload: err.response.data })
    );
};

export const getGenres = () => (dispatch) => {
  return axios
    .get("http://localhost:3001/genres")
    .then((res) => dispatch({ type: GET_GENRES, payload: res.data }))
    .catch(
      (err) => console.log(err.response.data)
      //dispatch({ type: ERROR, payload: err.response.data })
    );
};

export const loadingPage = (payload) => {
  return { type: LOADING_PAGE, payload };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterVideogameByGenre = (payload) => {
  return { type: FILTER_BY_GENRES, payload };
};

export const filterByCreate = (payload) => {
  return { type: FILTER_BY_CREATE, payload };
};

export const orderByRating = (payload) => {
  return { type: ORDER_BY_RATING, payload };
};

export const orderAlphabetical = (payload) => {
  return { type: ORDER_BY_A_Z, payload };
};

export const filterByPlatform = (payload) => {
  return { type: FILTER_BY_PLATFORMS, payload };
};
