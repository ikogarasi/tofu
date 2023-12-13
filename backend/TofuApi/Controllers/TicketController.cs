using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TofuApi.Dto;
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
        [HttpPost]
        public async Task<IActionResult> GetTicketsByParameters(TicketDTO ticketDTO)
        {
            var tickets = await _ticketRepository.getTicketDTOs(ticketDTO);
            return Ok(tickets);
        }
    }
}
