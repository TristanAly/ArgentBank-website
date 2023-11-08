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
    if (response && response.body && response.body.token) {
      localStorage.setItem(
        "token",
        JSON.stringify(response.body.token).slice(1, -1)
      );
    }
    return response;
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (userDetails) => {
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/signup",
      userDetails
    );
    const response = await request.data;
    if (response && response.body && response.body._id) {
      localStorage.setItem(
        "userId",
        JSON.stringify(response.body._id).slice(1, -1)
      );
    }
    return response.body;
  }
);
