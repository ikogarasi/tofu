import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Connection {
  from: string;
  to: string;
  departureDate: Date;
  passengersAmount: number;
  availableDates: AvailableDate[];
}

export interface AvailableDate {
  date: Date;
  tickets: Ticket[];
}

export interface Ticket {
  from: string;
  to: string;
  startDate: Date;
  endDate: Date;
  carriersName: string;
  price: number;
  amount: number;
}

const initialState: Connection[] = [
  {
    from: "Львів",
    to: "Київ",
    departureDate: new Date("2023-11-11"),
    passengersAmount: 1,
    availableDates: [
      {
        date: new Date("2023-11-10"),
        tickets: [
          {
            from: "Львів",
            to: "Київ",
            startDate: new Date(2018, 0o5, 0o5, 17, 23, 42, 11),
            endDate: new Date(2018, 0o5, 0o5, 17, 23, 42, 11),
            carriersName: "Test",
            price: 500,
            amount: 4,
          },
        ],
      },
      {
        date: new Date("2023-11-10"),
        tickets: [
          {
            from: "Львів",
            to: "Київ",
            startDate: new Date(2018, 0o5, 0o5, 18, 23, 42, 11),
            endDate: new Date(2018, 0o5, 0o5, 18, 23, 42, 11),
            carriersName: "Test",
            price: 500,
            amount: 4,
          },
        ],
      },
    ],
  },
];

export const connectionsSlice = createSlice({
  name: "connections",
  initialState,
  reducers: {},
});

export const {} = connectionsSlice.actions;

export const reducer = connectionsSlice.reducer;
