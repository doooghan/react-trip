import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductDetailState {
  loading: boolean;
  error: null | string;
  data: any;
}
const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
};

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(`/api/touristRoutes/${touristRouteId}`);
    return data;
  }
);

export const ProductDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetail.pending.type](state) {
      state.loading = true;
    },
    [getProductDetail.fulfilled.type](state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getProductDetail.rejected.type](
      state,
      action: PayloadAction<string | null>
    ) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
