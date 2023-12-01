import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./slices/ticketsSlice";
import connectionSliceHomePage from "./slices/connectionSliceHomePage";
import carriersSlice from "./slices/carriersSlice";

export const store = configureStore({
  reducer: {
    connection: connectionSliceHomePage,
    tickets: ticketsSlice,
    carriers: carriersSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
