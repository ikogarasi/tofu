using Microsoft.EntityFrameworkCore;
using TofuApi.Dto;
using TofuApi.Infrastructure;
using TofuApi.models;

namespace TofuApi.Repositories
{
    public class TicketRepository : ITicketRepository
    {
        private readonly ApplicationDbContext _context;

        public TicketRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Ticket>> GetFilteredTickets(TicketQueryParamsDto ticketDTO)
        {
            var tickets = await _context.Tickets
                .Include(i => i.Carrier)
                .Where(e => e.From == ticketDTO.From
                    && e.To == ticketDTO.To
                    && e.StartDate.Year == ticketDTO.StartDate.Year
                    && e.StartDate.Month == ticketDTO.StartDate.Month
                    && e.StartDate.Day == ticketDTO.StartDate.Day
                    && e.PassangersAmount == ticketDTO.PassangersAmount)
                .ToListAsync();

            return tickets;
        }

        public async Task<IEnumerable<Ticket>> GetTickets()
        {
            var tickets = await _context.Tickets.Include(i => i.Carrier).ToListAsync();

            return tickets;
        }

        public async Task<Ticket> AddNewTicket(AddTicketDto dto)
        {
            var carrier = await _context.Carriers.FirstOrDefaultAsync(i => i.Title.ToLower() == dto.Carrier.ToLower())
                ?? throw new ArgumentException("Carrier with such name does not exist");

            var ticket = new Ticket
            {
                CarrierId = carrier.Id,
                From = dto.From,
                To = dto.To,
                StartDate = dto.StartDate,
                EndDate = dto.EndDate
            };

            await _context.Tickets.AddAsync(ticket);
            await _context.SaveChangesAsync();

            return ticket;
        }

        public async Task DeleteTickets(int id)
        {
            var ticket = await _context.Tickets.FirstOrDefaultAsync(i => i.Id == id)
                ?? throw new ArgumentException("Ticket with such id does not exist");

            _context.Tickets.Remove(ticket);
            await _context.SaveChangesAsync();
        }
    }
}
