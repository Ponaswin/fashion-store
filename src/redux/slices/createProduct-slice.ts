import { getAllProducts } from "../../api/list";
import { deleteProduct } from "@/api/delete";
import { createProduct } from "@/api/create";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const fetchCreateProduct: any = createAsyncThunk(
  "create/product",
  async (params: any, { dispatch }) => {
    const res: any = await createProduct(params);
    dispatch(getListedItems(res));
    return res;
  }
);

export const listedCreatedSlice = createSlice({
  name: "createProduct",
  initialState,
  reducers: {
    getListedItems: (state: any, action: PayloadAction<any>) => {
      state = action.payload;
      console.log(state, "state");
      return state;
    },
  },
});

export default listedCreatedSlice.reducer;
export const { getListedItems } = listedCreatedSlice.actions;
