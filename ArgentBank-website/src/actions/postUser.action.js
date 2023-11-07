import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userCredentials) => {
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      userCredentials
    );
    const response = await request.data;
    localStorage.setItem(
      "token",
      JSON.stringify(response.body.token).slice(1, -1)
    );
    return response;
  }
);
