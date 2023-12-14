import { createApi } from "@reduxjs/toolkit/query/react";
import { authClient } from "../store/clients";
import { LoginDto, RegisterDto } from "../api/api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: () => ({ data: {} }),
  endpoints: (build) => ({
    login: build.mutation<string, LoginDto>({
      queryFn: async (dto: LoginDto) => {
        return { data: await authClient.login(dto) };
      },
    }),
    register: build.mutation<void, RegisterDto>({
      queryFn: async (dto: RegisterDto) => {
        return { data: await authClient.register(dto) };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export default authApi;
