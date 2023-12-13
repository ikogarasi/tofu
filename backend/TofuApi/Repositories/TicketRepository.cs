using Microsoft.EntityFrameworkCore;
using TofuApi.Dto;
using TofuApi.Infrastructure;

namespace TofuApi.Repositories
{
    public class TicketRepository: ITicketRepository
    {
        private readonly ApplicationDbContext _context;

        public TicketRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<GetTicketDTO>> getTicketDTOs(TicketDTO ticketDTO)
        {
            var tickets = await _context.Tickets.Where(e => e.From == ticketDTO.From && e.To == ticketDTO.To && e.StartDate.Year == ticketDTO.StartDate.Year && e.StartDate.Month == ticketDTO.StartDate.Month && e.StartDate.Day == ticketDTO.StartDate.Day && e.PassangersAmount == ticketDTO.PassangersAmount).ToListAsync();
            List<GetTicketDTO> getTicketDTOs = new List<GetTicketDTO>();

            foreach (var ticket in tickets)
            {
                getTicketDTOs.Add(new GetTicketDTO()
                {
                    From = ticket.From,
                    To = ticket.To,
                    StartDate = ticket.StartDate,
                    EndDate = ticket.EndDate,
                    Price = ticket.Price,
                    PassangersAmount = ticket.PassangersAmount,
                    CarrierName = (await _context.Carriers.FirstOrDefaultAsync(e => e.Id == ticket.CarrierId)).Title
                });
            }

            return getTicketDTOs;
        }
    }
}
