import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Comment } from "../pages/InformationAboutCarrier";

export const commentApi = createApi({
  reducerPath: "commentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7128",
  }),
  endpoints: (builder) => ({
    fetchAllComments: builder.query<Comment, string>({
      query: (carrierName) => ({
        url: "Comment",
        params: {
          carrierName,
        },
      }),
    }),
  }),
});
