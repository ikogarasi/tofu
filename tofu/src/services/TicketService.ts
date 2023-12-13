import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITicket } from '../pages/SearchPage'
import { Ticket } from '../store/slices/ticketsSlice'

export const ticketApi = createApi({
    reducerPath: "ticketAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://localhost:7128/api/Ticket"}),
    endpoints:(build) => ({
        fetchAllTickets: build.mutation<Ticket[], ITicket>({
            query: (tickets) => ({
                url: "",
                method: "POST",
                body: tickets,
            })
        })
    })
})