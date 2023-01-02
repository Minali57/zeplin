export const missionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return { ...state, fav: [...state.fav, action.payload] };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        fav: state.fav.filter((c) => c !== action.payload._uuid),
      };
    case "ASSIGN":
      return { ...state, assign: [...state.assign, action.payload] };
    case "REMOVE":
      return {
        ...state,
        assign: state.assign.filter((c) => c !== action.payload._uuid),
      };

    default:
      return state;
  }
};
