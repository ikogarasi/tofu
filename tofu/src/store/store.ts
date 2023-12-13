import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ticketsSlice from "./slices/ticketsSlice";
import connectionSliceHomePage from "./slices/connectionSliceHomePage";
import carriersSlice from "./slices/carriersSlice";
import { ticketApi } from "../services/TicketService";

export const store = configureStore({
  reducer: {
    [ticketApi.reducerPath]: ticketApi.reducer,
    connection: connectionSliceHomePage,
    tickets: ticketsSlice,
    carriers: carriersSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(ticketApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
