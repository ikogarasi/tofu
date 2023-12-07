import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Connection {
  from: string;
  to: string;
  departureDate: string;
  passengersAmount: number;
}

const initialState: Connection = {
  from: "",
  to: "",
  departureDate: new Date().toISOString().slice(0, 16),
  passengersAmount: 0,
};

export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setConnection(state, action: PayloadAction<Connection>) {
      console.log(state);
      state = action.payload;
      console.log(state);
    },
    cleanConnection(state) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState;
    },
  },
});

export const { setConnection, cleanConnection } = connectionSlice.actions;

export default connectionSlice.reducer;
