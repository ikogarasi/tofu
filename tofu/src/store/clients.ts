import { AuthClient, CarrierClient, TicketClient } from "../api/api";

const baseUrl = " https://localhost:7128";

export const authClient = new AuthClient(baseUrl);
export const ticketClient = new TicketClient(baseUrl);
export const carrierClient = new CarrierClient(baseUrl);
