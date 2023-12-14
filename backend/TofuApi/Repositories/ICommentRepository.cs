using TofuApi.Dto;
using TofuApi.models;

namespace TofuApi.Repositories
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetComments(int CarrierId);
        Task<bool> CreateNewComment(CommentDTO commentDTO);
    }
}
