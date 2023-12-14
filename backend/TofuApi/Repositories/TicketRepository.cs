using Microsoft.EntityFrameworkCore;
using System.Globalization;
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
            var tickets = _context.Tickets.Include(i => i.Carrier).AsQueryable();

            if (!string.IsNullOrWhiteSpace(ticketDTO.StartDate))
            {
                var filterDate = DateTime.ParseExact(ticketDTO.StartDate, "yyyy-MM-dd", CultureInfo.InvariantCulture);
                
                tickets = tickets.Where(e => e.StartDate.Year == filterDate.Year
                    && e.StartDate.Month == filterDate.Month
                    && e.StartDate.Day == filterDate.Day);
            }
            if (!string.IsNullOrWhiteSpace(ticketDTO.From))
            {
                tickets = tickets.Where(i => i.From.ToLower() == ticketDTO.From.ToLower());
            }
            if (!string.IsNullOrWhiteSpace(ticketDTO.To))
            {
                tickets = tickets.Where(i => i.To.ToLower() == ticketDTO.To.ToLower());
            }
            if (ticketDTO.PassangersAmount != 0)
            {
                tickets = tickets.Where(i => i.PassangersAmount == ticketDTO.PassangersAmount);
            }

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
                EndDate = dto.EndDate,
                PassangersAmount = dto.PassangersAmount,
                Price = dto.Price
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
