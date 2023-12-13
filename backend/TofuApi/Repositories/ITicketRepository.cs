using TofuApi.Dto;

namespace TofuApi.Repositories
{
    public interface ITicketRepository
    {
        Task<List<GetTicketDTO>> getTicketDTOs(TicketDTO ticketDTO);
    }
}
