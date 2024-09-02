import { TCarData } from "../../../pages/admin/AllCarsTable";
import { TResponseRedux } from "../../../types/global";
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
      transformResponse: (response: TResponseRedux<TCarData[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
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
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateCarMutation,
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;
