import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = authApi;
