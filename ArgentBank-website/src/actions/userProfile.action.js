import axios from "axios";
export const GET_USER = "GET_USER";

export const getUser = (access_token) => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        // console.log(res.data.body);
        dispatch({ type: GET_USER, payload: res.data.body });
      });
  };
};
