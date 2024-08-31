import { baseApi } from "../baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (carInfo) => ({
        url: `/cars`,
        method: "POST",
        body: carInfo,
      }),
    }),
  }),
});

export const { useCreateCarMutation } = carApi;
