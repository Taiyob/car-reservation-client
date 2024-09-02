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
      transformResponse: (response: TResponseRedux<TCarData[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
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
  useGetCarsImageQuery,
  useGetSingleCarQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;
