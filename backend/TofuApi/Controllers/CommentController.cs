using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TofuApi.Dto;
using TofuApi.Repositories;

namespace TofuApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetCommentsForCarrier([FromQuery] string CarrierId)
        {
            int carrierId = Int32.Parse(CarrierId);

            var comments = await _commentRepository.GetComments(carrierId);

            return Ok(comments);
        }

        [HttpPost]
        public async Task<IActionResult> CreateNewComment([FromBody] CommentDTO commentDTO)
        {
            var result = await _commentRepository.CreateNewComment(commentDTO);
            return Ok(result);
        }
    }
}
