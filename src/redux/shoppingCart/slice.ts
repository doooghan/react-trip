import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ShoppingCartState {
  loading: boolean;
  error: null | string;
  items: any[];
}
const initialState: ShoppingCartState = {
  loading: true,
  error: null,
  items: [],
};

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get(`/api/shoppingCart`, {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    });
    return data.shoppingCartItems;
  }
);

export const addShoppingCartItem = createAsyncThunk(
  "shoppingCart/addShoppingCartItem",
  async (parameters: { jwt: string; touristRouteId: string }, thunkAPI) => {
    const { data } = await axios.post(
      `/api/shoppingCart/items`,
      {
        touristRouteId: parameters.touristRouteId,
      },
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);
export const clearShoppingCartItem = createAsyncThunk(
  "shoppingCart/clearShoppingCartItem",
  async (parameters: { jwt: string; itemIds: number[] }, thunkAPI) => {
    return await axios.delete(
      `/api/shoppingCart/items/(${parameters.itemIds.join(",")})`,
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
  }
);

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: {
    [getShoppingCart.pending.type](state) {
      state.loading = true;
    },
    [getShoppingCart.fulfilled.type](state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getShoppingCart.rejected.type](
      state,
      action: PayloadAction<string | null>
    ) {
      state.error = action.payload;
      state.loading = false;
    },

    [addShoppingCartItem.pending.type](state) {
      state.loading = true;
    },
    [addShoppingCartItem.fulfilled.type](state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [addShoppingCartItem.rejected.type](
      state,
      action: PayloadAction<string | null>
    ) {
      state.error = action.payload;
      state.loading = false;
    },

    [clearShoppingCartItem.pending.type](state) {
      state.loading = true;
    },
    [clearShoppingCartItem.fulfilled.type](state) {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
    [clearShoppingCartItem.rejected.type](
      state,
      action: PayloadAction<string | null>
    ) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
