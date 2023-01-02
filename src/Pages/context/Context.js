import { createContext, useContext, useReducer } from "react";
import { missionReducer } from "./Reducer";

export const Mission = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(missionReducer, {
    fav: [],
    assign: [],
    storyfav: [],
  });
  return (
    <Mission.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Mission.Provider>
  );
};
export const MissionState = () => {
  return useContext(Mission);
};

export default Context;
