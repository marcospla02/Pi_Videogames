import {
  GET_ALL_VIDEOGAME,
  GET_VIDEOGAME_DETAIL,
  CREATE_VIDEOGAME,
  GET_BY_NAME,
  CLEAN_DETAIL,
  FILTER_BY_GENRES,
  FILTER_BY_CREATE,
  ORDER_BY_RATING,
  ORDER_BY_A_Z,
  GET_GENRES,
  LOADING_PAGE,
  FILTER_BY_PLATFORMS,
  // ERROR,
} from "../actions/index";

const initialState = {
  vgLoaded: [],
  allVgLoaded: [],
  vgGenres: [],
  vgDetail: {},
  vgPlatforms: [
    "PC",
    "PlayStation 5",
    "Xbox One",
    "PlayStation 4",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
  ],
  // errors: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAME:
      return {
        ...state,
        vgLoaded: action.payload,
        allVgLoaded: action.payload,
      };
    // case ERROR:
    //   return {
    //     ...state,
    //     errors: action.payload,
    //   };
    case CREATE_VIDEOGAME:
      const data = action.payload;
      return {
        ...state,
        vgLoaded: [...state.vgLoaded, data],
      };
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        vgDetail: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        vgLoaded: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        vgGenres: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        vgDetail: {},
      };

    case FILTER_BY_GENRES:
      const allVideogames = state.allVgLoaded;
      const filterByGenre =
        action.payload === "All"
          ? allVideogames
          : allVideogames.filter((videogame) => {
              return videogame.genres.includes(action.payload);
            });
      return {
        ...state,
        vgLoaded: filterByGenre,
      };

    case FILTER_BY_CREATE:
      const allVideogames1 = state.allVgLoaded;
      const filterByCreate =
        action.payload === "all"
          ? allVideogames1
          : action.payload === "existing"
          ? allVideogames1.filter((videogameApi) => {
              return !videogameApi.createdInDb;
            })
          : allVideogames1.filter((videogame) => {
              return videogame.createdInDb;
            });
      return {
        ...state,
        vgLoaded: filterByCreate,
      };

    case ORDER_BY_RATING:
      const allVideogames2 = state.vgLoaded;
      const order =
        action.payload === "all"
          ? allVideogames2
          : action.payload === "max"
          ? allVideogames2.sort((vg1, vg2) => {
              if (vg1.rating > vg2.rating) return -1;
              if (vg1.rating < vg2.rating) return 1;
              return 0;
            })
          : allVideogames2.sort((vg1, vg2) => {
              if (vg1.rating > vg2.rating) return 1;
              if (vg1.rating < vg2.rating) return -1;
              return 0;
            });
      return {
        ...state,
        vgLoaded: order,
      };

    case ORDER_BY_A_Z:
      const allVideogames3 = state.vgLoaded;
      const orderAlphabetical =
        action.payload === "asc"
          ? allVideogames3.sort((vg1, vg2) => {
              if (vg1.name > vg2.name) return 1;
              if (vg1.name < vg2.name) return -1;
              return 0;
            })
          : allVideogames3.sort((vg1, vg2) => {
              if (vg1.name > vg2.name) return -1;
              if (vg1.name < vg2.name) return 1;
              return 0;
            });
      return {
        ...state,
        vgLoaded: orderAlphabetical,
      };

    case LOADING_PAGE:
      console.log(action.payload, "es payload en reducer");
      return {
        ...state,
        loading: action.payload,
      };

    case FILTER_BY_PLATFORMS:
      const filterByPlatform =
        action.payload === "all"
          ? state.allVgLoaded
          : state.allVgLoaded.filter((vg) =>
              vg.platforms.includes(action.payload)
            );
      return {
        ...state,
        vgLoaded: filterByPlatform,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
