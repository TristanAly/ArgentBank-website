import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiBaseUrl = "http://localhost:3001/api/v1";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userCredentials) => {
    try {
      const request = await axios.post(
        `${apiBaseUrl}/user/login`,
        userCredentials
      );
      const response = await request.data;
      if (response && response.body && response.body.token) {
        localStorage.setItem(
          "token",
          JSON.stringify(response.body.token).slice(1, -1)
        );
        return response;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        throw new Error("Invalid email or password");
      } else {
        throw new Error("Login failed");
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (userDetails) => {
    const request = await axios.post(`${apiBaseUrl}/user/signup`, userDetails);
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
export const getUser = createAsyncThunk(
  "user/getUser",
  async (access_token) => {
    try {
      const response = await fetch(`${apiBaseUrl}/user/profile`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.status === 200) {
          return data.body;
        } else {
          throw new Error(data.message);
        }
      } else {
        throw new Error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error Fetching user details", error);
      throw error; // Renvoie l'erreur pour que le thunk puisse la gérer
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (newUserDetails, { rejectWithValue }) => {
    console.log("Contenu de newUserDetails :", newUserDetails);
    const access_token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${apiBaseUrl}/user/profile`,
        newUserDetails,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data && response.data.status === 200) {
        console.log("Réponse avec statut 200 :", response.data.body);
        return response.data.body;
      } else {
        console.log("Réponse avec statut non-200 :", response.data.body);
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      console.log("3");
      return rejectWithValue(error.message);
    }
  }
);
