import { createApi } from "@reduxjs/toolkit/query/react";
import { ticketClient } from "../store/clients";
import { AddTicketDto, Ticket } from "../api/api";

export interface TicketQueryParamsDto {
  from: string | undefined;
  to: string | undefined;
  startDate: Date | undefined;
  passangersAmount: number | undefined;
}

export const ticketApi = createApi({
  reducerPath: "ticketAPI",
  baseQuery: () => ({ data: {} }),
  endpoints: (build) => ({
    fetchAllTicketsByQueryParams: build.query<Ticket[], TicketQueryParamsDto>({
      queryFn: async ({
        from,
        to,
        startDate,
        passangersAmount,
      }: TicketQueryParamsDto) => {
        return {
          data: await ticketClient.getTicketsByParameters(
            from,
            to,
            startDate,
            passangersAmount
          ),
        };
      },
    }),
    fetchAllTickets: build.query<Ticket[], void>({
      queryFn: async () => {
        return { data: await ticketClient.getTickets() };
      },
    }),
    addTicket: build.mutation<Ticket, AddTicketDto>({
      queryFn: async (dto: AddTicketDto) => {
        return { data: await ticketClient.addTicket(dto) };
      },
    }),
    removeTicket: build.mutation<void, number>({
      queryFn: async (id: number) => {
        return { data: await ticketClient.removeTicket(id) };
      },
    }),
  }),
});

export const {
  useAddTicketMutation,
  useFetchAllTicketsQuery,
  useFetchAllTicketsByQueryParamsQuery,
  useRemoveTicketMutation,
} = ticketApi;

export default ticketApi;
