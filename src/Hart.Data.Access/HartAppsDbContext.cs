using Hart.Domain.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace Hart.Data.Access
{
    public class HartAppsDbContext : DbContext
    {
        public HartAppsDbContext(DbContextOptions<HartAppsDbContext> options) :
            base(options)
        {
        }

        public DbSet<ContactForm> ContactForm { get; set; }
    }
}