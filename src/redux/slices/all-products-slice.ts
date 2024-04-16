import { getAllProducts } from "../../api/list";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const fetchAllProducts: any = createAsyncThunk(
  "getallproducts",
  async (params:any, { dispatch }) => {
    const res: any = await getAllProducts();
    console.log(res, "state");
    dispatch(getListedItems(res));
    return res;
  }
);

export const ListedItemsSlice = createSlice({
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

export default ListedItemsSlice.reducer;
export const { getListedItems } = ListedItemsSlice.actions;
