import { GET_USER } from "../actions/userProfile.action";

const initialState = {};

export default function getUserReducers(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
