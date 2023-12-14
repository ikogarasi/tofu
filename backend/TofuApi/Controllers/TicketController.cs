using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TofuApi.Dto;
using TofuApi.models;
using TofuApi.Repositories;

namespace TofuApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly ITicketRepository _ticketRepository;
        public TicketController(ITicketRepository ticketRepository)
        {
            _ticketRepository = ticketRepository;
        }

        [HttpGet("filter")]
        [ProducesResponseType(typeof(IEnumerable<Ticket>), 200)]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTicketsByParameters([FromQuery] TicketQueryParamsDto ticketDTO)
        {
            var tickets = await _ticketRepository.GetFilteredTickets(ticketDTO);
            return Ok(tickets);
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Ticket>), 200)]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTickets()
        {
            var tickets = await _ticketRepository.GetTickets();
            return Ok(tickets);
        }

        [HttpPost]
        [ProducesResponseType(typeof(Ticket), 200)]
        public async Task<ActionResult<Ticket>> AddTicket([FromBody] AddTicketDto dto)
        {
            await _ticketRepository.AddNewTicket(dto);
            return Ok();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(void), 200)]
        public async Task<ActionResult> RemoveTicket(int id)
        {
            await _ticketRepository.DeleteTickets(id);
            return Ok();
        }
    }
}
