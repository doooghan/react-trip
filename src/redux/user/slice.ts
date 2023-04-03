import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  loading: boolean;
  error: null | string;
  token: string | null;
}
const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};

export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    paramaters: {
      email: string;
      name: string;
    },
    thunkAPI
  ) => {
    const { data } = await axios.post(`/auth/login`, {
      email: paramaters.email,
      name: paramaters.name,
    });
    return data.token;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    [signIn.pending.type](state) {
      state.loading = true;
    },
    [signIn.fulfilled.type](state, action) {
      state.token = action.payload;
      state.loading = false;
      state.error = null;
    },
    [signIn.rejected.type](state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
