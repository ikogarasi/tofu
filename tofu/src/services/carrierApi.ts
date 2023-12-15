import { createApi } from "@reduxjs/toolkit/query/react";
import { Carrier, CarrierDto } from "../api/api";
import { carrierClient } from "../store/clients";

export const carrierApi = createApi({
  reducerPath: "carrierApi",
  baseQuery: () => ({ data: {} }),
  tagTypes: ["Carriers"],
  endpoints: (build) => ({
    getAllCarriers: build.query<Carrier[], void>({
      queryFn: async () => {
        return {
          data: await carrierClient.getCarriers(),
        };
      },
      providesTags: ["Carriers"],
    }),
    createCarrier: build.mutation<Carrier, CarrierDto>({
      queryFn: async (dto: CarrierDto) => {
        return {
          data: await carrierClient.addCarrier(dto),
        };
      },
      invalidatesTags: ["Carriers"],
    }),
    getCarrierById: build.query<Carrier, number>({
      queryFn: async (id: number) => {
        return {
          data: await carrierClient.getCarrierById(id),
        };
      },
      providesTags: ["Carriers"],
    }),
  }),
});

export const {
  useGetAllCarriersQuery,
  useCreateCarrierMutation,
  useGetCarrierByIdQuery,
} = carrierApi;

export default carrierApi;
