import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../reducers/user.reducer";
import getUserReducers from "../reducers/getUser.reducer";
import { getUser } from "../actions/userProfile.action";

const store = configureStore({
  reducer: {
    user: useReducer,
    getuser: getUserReducers,
  },
  // devTools: true,
});
const access_token = localStorage.getItem("token");
store.dispatch(getUser(access_token));

export default store;
