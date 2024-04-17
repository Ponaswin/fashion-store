import { getAllProducts } from "../../api/list";
import { deleteProduct } from "@/api/delete";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const fetchDeleteProduct: any = createAsyncThunk(
  "getallproducts",
  async (params: any, { dispatch }) => {
    const res: any = await deleteProduct(params);
    dispatch(getListedItems(res));
    return res;
  }
);

export const listedUpdatedSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getListedItems: (state: any, action: PayloadAction<any>) => {
      state = action.payload;
      console.log(state, "state");
      return state;
    },
  },
});

export default listedUpdatedSlice.reducer;
export const { getListedItems } = listedUpdatedSlice.actions;
