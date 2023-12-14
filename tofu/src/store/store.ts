import { configureStore } from "@reduxjs/toolkit";
import connectionSliceHomePage from "./slices/connectionSliceHomePage";
import { ticketApi } from "../services/ticketApi";
import carrierApi from "../services/carrierApi";
import authApi from "../services/authApi";
import userSlice from "./slices/userSlice";
import { ticketClient } from "./clients";
import carriersSlice from "./slices/carriersSlice";
import ticketsSlice from "./slices/ticketsSlice";

export const store = configureStore({
  reducer: {
    [ticketApi.reducerPath]: ticketApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [carrierApi.reducerPath]: carrierApi.reducer,
    connection: connectionSliceHomePage,
    tickets: ticketsSlice,
    carriers: carriersSlice,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ticketApi.middleware)
      .concat(carrierApi.middleware)
      .concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
