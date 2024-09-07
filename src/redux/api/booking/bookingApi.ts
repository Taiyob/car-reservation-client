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
  }),
});

export const { useCreateBookingMutation } = bookingApi;
