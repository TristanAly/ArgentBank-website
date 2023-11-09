import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../reducers/user.reducer";
import getUserReducers from "../reducers/getUser.reducer";
import { getUser } from "../actions/userProfile.action";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
  // devTools: true,
});

export default store;
