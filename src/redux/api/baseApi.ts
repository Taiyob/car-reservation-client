import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api`,
    //baseUrl: `https://car-colledtion-reservation-backend.vercel.app/api`,
    credentials: "include",
  }),
  endpoints: () => ({}),
});
