import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Carrier {
  id?: number;
  name: string;
  description?: string | null;
  image?: string | ArrayBuffer;
}

const initialState: Carrier[] = [];

export const carriersSlice = createSlice({
  name: "carriers",
  initialState,
  reducers: {
    setCarriers(state, action: PayloadAction<Carrier[]>) {
      state = action.payload;
    },
    addCarrier(state, action: PayloadAction<Carrier>) {
      const carrier: Carrier = action.payload;
      const id: number = state[state.length - 1]?.id ?? 0;

      state.push({ ...carrier, id: id + 1 });

      state.push(action.payload);
    },
  },
});

export const { setCarriers, addCarrier } = carriersSlice.actions;
export default carriersSlice.reducer;
