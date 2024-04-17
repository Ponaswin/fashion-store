import { getAllProducts } from "../../api/list";
import { deleteProduct } from "@/api/delete";
import { createProduct } from "@/api/create";
import { updateProduct } from "@/api/update";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const fetchUpdateProduct: any = createAsyncThunk(
  "update/product",
  async (params: any, { dispatch }) => {
    const res: any = await updateProduct(params);
    dispatch(getUpdateProduct(res));
    return res;
  }
);

export const updateProductSlice = createSlice({
  name: "updateProduct",
  initialState,
  reducers: {
    getUpdateProduct: (state: any, action: PayloadAction<any>) => {
      state = action.payload;
      console.log(state, "state");
      return state;
    },
  },
});

export default updateProductSlice.reducer;
export const { getUpdateProduct } = updateProductSlice.actions;
