using TofuApi.Dto;
using TofuApi.models;

namespace TofuApi.Repositories
{
    public interface ITicketRepository
    {
        Task<Ticket> AddNewTicket(AddTicketDto dto);
        Task DeleteTickets(int id);
        Task<IEnumerable<Ticket>> GetFilteredTickets(TicketQueryParamsDto ticketDTO);
        Task<IEnumerable<Ticket>> GetTickets();
    }
}