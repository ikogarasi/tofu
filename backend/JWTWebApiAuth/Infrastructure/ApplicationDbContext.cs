using JWTWebApiAuth.models;
using Microsoft.EntityFrameworkCore;

namespace JWTWebApiAuth.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();

            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Carrier> Carriers { get; set; }
    }
}
