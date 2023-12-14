import { createSlice } from "@reduxjs/toolkit";

export interface UserData {

  userName: string;
}

interface UserState {
  userData: UserData;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  userData: {
    userName: "",
  },
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
    cleanUser(state) {
      state = initialState;
      document.cookie = "API_TOKEN=";
    },
  },
});

export const { setUser, cleanUser } = userSlice.actions;

export default userSlice.reducer;