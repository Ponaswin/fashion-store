import { createUser } from "@/api/create";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const fetchCreateUser: any = createAsyncThunk(
  "create/user",
  async (params: any, { dispatch }) => {
    const res: any = await createUser(params);
    dispatch(getUser(res));
    return res;
  }
);

export const createUserSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {
    getUser: (state: any, action: PayloadAction<any>) => {
      state = action.payload;
      return state;
    },
  },
});

export default createUserSlice.reducer;
export const { getUser } = createUserSlice.actions;
