import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (registerInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: registerInfo,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginInfo) => ({
        url: `/auth/signin`,
        method: "POST",
        body: loginInfo,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = authApi;
