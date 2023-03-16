import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductDetailState{
  loading: boolean,
  error: null | string,
  data: any;
}
const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
}
export const ProductDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers:{
    fetchStart(state){
      state.loading = true
    },
    fetchSuccess(state, action){
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFail(state, action: PayloadAction<string | null>){
      state.error = action.payload
      state.loading = false
    }
  }
})