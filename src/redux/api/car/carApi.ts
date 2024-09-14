import { TCarData } from "../../../pages/admin/AllCarsTable";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (carInfo) => ({
        url: `/cars`,
        method: "POST",
        body: carInfo,
      }),
      invalidatesTags: ["car"],
    }),
    getAllCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/cars",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["car"],
      transformResponse: (response: TResponseRedux<TCarData[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAvailableCars: builder.query({
      query: () => ({
        url: `/cars/available-car`,
        method: `GET`,
      }),
    }),
    getCarsImage: builder.query({
      query: () => ({
        url: `/cars/image`,
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
      invalidatesTags: ["car"],
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["car"],
    }),
    returnCar: builder.mutation({
      query: ({ bookingId, endTime }) => ({
        url: `/cars/return`,
        method: "PUT",
        body: { bookingId, endTime },
      }),
      invalidatesTags: ["car"],
    }),
  }),
});

export const {
  useCreateCarMutation,
  useGetAllCarsQuery,
  useGetAvailableCarsQuery,
  useGetCarsImageQuery,
  useGetSingleCarQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useReturnCarMutation,
} = carApi;
