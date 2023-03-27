import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
  loading: boolean;
  error: null | string;
  data: any;
  pagination: any;
}
const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
};

export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(`/api/touristRoutes/${touristRouteId}`);
    return data;
  }
);

export const ProductSearchSlice = createSlice({
  name: "productSearch",
  initialState,
  reducers: {},
  extraReducers: {
    [searchProduct.pending.type](state) {
      state.loading = true;
    },
    [searchProduct.fulfilled.type](state, action) {
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
      state.error = null;
    },
    [searchProduct.rejected.type](state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
