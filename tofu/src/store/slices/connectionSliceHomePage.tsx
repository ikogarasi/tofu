import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Connection {
  from: string;
  to: string;
  departureDate: Date;
  passengersAmount: number;
}

const initialState: Connection = {
  from: "",
  to: "",
  departureDate: new Date(new Date().getTime()),
  passengersAmount: 0,
};

export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setConnection(state, action: PayloadAction<Connection>) {
      state = action.payload;
    },
    setNewDepartureDate(state, action: PayloadAction<Date>) {
      state.departureDate = action.payload;
    },
    setNewFromPoint(state, action: PayloadAction<string>) {
      state.from = action.payload;
    },
    setNewToPoint(state, action: PayloadAction<string>) {
      state.to = action.payload;
    },
    setNewPassengersAmount(state, action: PayloadAction<number>) {
      state.passengersAmount = action.payload;
    },
    cleanConnection(state) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState;
    },
  },
});

export const {
  setNewDepartureDate,
  setNewFromPoint,
  setNewToPoint,
  setNewPassengersAmount,
  setConnection,
  cleanConnection,
} = connectionSlice.actions;

export default connectionSlice.reducer;
