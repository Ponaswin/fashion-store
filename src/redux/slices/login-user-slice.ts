import { userLogin } from "@/api/create";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const fetchUserLogin: any = createAsyncThunk(
  "login/user",
  async (params: any, { dispatch }) => {
    const res: any = await userLogin(params);
    dispatch(getUser(res));
    return res;
  }
);

export const userLoginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    getUser: (state: any, action: PayloadAction<any>) => {
      state = action.payload;
      return state;
    },
  },
});

export default userLoginSlice.reducer;
export const { getUser } = userLoginSlice.actions;
