import { getProduct } from "../../api/list";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const fetchProduct: any = createAsyncThunk(
  "getProducts",
  async (params: any, { dispatch }) => {
    const res: any = await getProduct(params);
    dispatch(getItem(res));
    return res;
  }
);

export const listItemSLice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getItem: (state: any, action: PayloadAction<any>) => {
      state = action.payload;

      return state;
    },
  },
});

export default listItemSLice.reducer;
export const { getItem } = listItemSLice.actions;
