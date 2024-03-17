import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    addFollower: builder.mutation({
      query: (user) => ({
        url: "/cloud9/add-follower",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useAddFollowerMutation } = apiSlice;
