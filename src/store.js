import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./feature/login/loginSlice";
import ZeplinReducer from "./feature/zeplin/ZeplinSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    mission: ZeplinReducer,
  },
});
