import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Ticket {
  id?: number;
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
    id: 1,
    from: "Львів",
    to: "Київ",
    startDate: new Date(2018, 0o5, 0o5, 17, 23, 42, 11),
    endDate: new Date(2018, 0o5, 0o5, 17, 23, 42, 11),
    carriersName: "Test",
    price: 500,
    amount: 4,
  },
  {
    id: 2,
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
    removeTicket(state, action: PayloadAction<number>) {
      const indexToRemove = state.findIndex((obj) => obj.id === action.payload);

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
    addTicket(state, action: PayloadAction<Ticket>) {
      const ticket: Ticket = action.payload;
      const id: number = state[state.length - 1]?.id ?? 0;

      state.push({ ...ticket, id: id + 1 });
    },
  },
});

export const { setTickets, removeTicket, addTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;
