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
    getAllCars: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
    }),
    getSingleCar: builder.query({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "GET",
      }),
    }),
    updateCar: builder.mutation({
      query: (args) => ({
        url: `/cars/${args.id}`,
        method: `PATCH`,
        body: args.data,
      }),
    }),
  }),
});

export const {
  useCreateCarMutation,
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useUpdateCarMutation,
} = carApi;
