using TofuApi.dto;
using TofuApi.Infrastructure;
using TofuApi.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace TofuApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarrierController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CarrierController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Carrier>>> GetCarriers()
        {
            var l = await _context.Carriers.ToListAsync();
            return l;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Carrier?>> GetCarrierById(int id)
        {
            return await _context.Carriers.FirstOrDefaultAsync(i => i.Id == id);
        }

        [HttpPost]
        public async Task<ActionResult<Carrier>> AddCarrier([FromForm]CarrierDto request)
        {
            var carrier = new Carrier()
            {
                Title = request.Title,
                Description = request.Description,
            };

            using var ms = new MemoryStream();
            await request.Image.CopyToAsync(ms);
            var imageData = ms.ToArray();

            carrier.Image = imageData;

            await _context.Carriers.AddAsync(carrier);

            await _context.SaveChangesAsync();

            return Ok(carrier);
        }
    }
}
