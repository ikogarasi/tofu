using TofuApi.models;
using Microsoft.EntityFrameworkCore;

namespace TofuApi.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Carrier> Carriers { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
    }
}
