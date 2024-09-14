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
      invalidatesTags: ["booking"],
    }),
    getAllBookings: builder.query({
      providesTags: ["booking"],
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
      providesTags: ["booking", "user"],
      query: () => ({
        url: `/bookings/my-bookings`,
        method: "GET",
      }),
    }),
    getSingleBooking: builder.query({
      providesTags: ["booking", "user"],
      query: (id) => ({
        url: `/bookings/single-booking/${id}`,
        method: "GET",
      }),
    }),
    updateStatusInApproved: builder.mutation({
      query: (id) => ({
        url: `/bookings/change-booking-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
  useGetSingleBookingQuery,
  useUpdateStatusInApprovedMutation,
} = bookingApi;
