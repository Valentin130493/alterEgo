import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "../../helpers/storage";
import { authKey } from "../../static/storageKey";

const auth = LocalStorage.get(authKey);

const initialState = {
  isAuth: Boolean(auth),
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (_, { payload }) => {
      _.isAuth = Boolean(payload);
    },
    setUserInfo: (_, { payload }) => {
      console.log(payload);
      _.userInfo = payload;
    },
  },
});

export const { setAuth, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
