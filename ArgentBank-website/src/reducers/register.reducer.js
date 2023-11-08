// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { registerUser } from "../actions/postUser.action"; // Assurez-vous d'avoir une action d'enregistrement appropriée

// const registerReducer = createSlice({
//   name: "userRegister",
//   initialState: {
//     msg:""
//     user: null,
//     token:""
//     loading: false,
//     error: null,
//   },
//   reducers:{

//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.user = null;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.error = null;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.user = null;
//         console.log(action.error.message);
//         if (action.error.message === "Request failed with status code 401") {
//           state.error = "Access Denied Invalid Credentials";
//         } else {
//           state.error = action.error.message;
//         }
//       });
//   },
// });

// export default registerReducer.reducer;
