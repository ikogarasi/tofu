using Microsoft.EntityFrameworkCore;
using TofuApi.Dto;
using TofuApi.Infrastructure;
using TofuApi.models;

namespace TofuApi.Repositories
{
    public class CommentRepository: ICommentRepository
    {
        private readonly ApplicationDbContext _context;
        public CommentRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<Comment>> GetComments(int CarrierId) {
            var comments = await _context.Comments.Where(e => e.CarrierId == CarrierId).ToListAsync();

            return comments;
        }

        public async Task<bool> CreateNewComment(CommentDTO commentDTO)
        {
            var carrierId = await _context.Carriers.FirstOrDefaultAsync(e => e.Title == commentDTO.CarrierName);
            var userId = await _context.Users.FirstOrDefaultAsync(e => e.UserEmail == commentDTO.Email);

            await _context.Comments.AddAsync(new Comment {
                UserEmail = commentDTO.Email,
                Text = commentDTO.Text,
                Rate = commentDTO.Rate,
                UserId = userId.Id,
                CarrierId = carrierId.Id,
            });

            await _context.SaveChangesAsync();
            return true;
        }
    }
}
