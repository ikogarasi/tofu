import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Ticket {
  from: string;
  to: string;
  startDate: Date;
  endDate: Date;
  carriersName: string;
  price: number;
  amount: number;
}

const initialState: Ticket[] = [
  {
    from: "Львів",
    to: "Київ",
    startDate: new Date(2018, 0o5, 0o5, 17, 23, 42, 11),
    endDate: new Date(2018, 0o5, 0o5, 17, 23, 42, 11),
    carriersName: "Test",
    price: 500,
    amount: 4,
  },
  {
    from: "Львів",
    to: "Київ",
    startDate: new Date(2018, 0o5, 0o5, 18, 23, 42, 11),
    endDate: new Date(2018, 0o5, 0o5, 18, 23, 42, 11),
    carriersName: "Test",
    price: 500,
    amount: 4,
  },
];

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<Ticket[]>) {
      state = action.payload;
    },
  },
});

export const { setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
