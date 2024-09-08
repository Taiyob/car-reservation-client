import { TBookingInfoDetails } from "../../../types/bookingType";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: `/bookings`,
        method: `POST`,
        body: bookingInfo,
      }),
    }),
    getAllBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/bookings`,
          method: `GET`,
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TBookingInfoDetails[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getMyBookings: builder.query({
      query: () => ({
        url: `/bookings/my-bookings`,
        method: 'GET'
      })
    }),
  }),
});

export const { useCreateBookingMutation, useGetAllBookingsQuery, useGetMyBookingsQuery } = bookingApi;
