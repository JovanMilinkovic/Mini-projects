using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class Context : DbContext
    {
        public DbSet<Fabrika> Fabrike { get; set; }

        public DbSet<Silos> Silosi { get; set; }

        public Context(DbContextOptions options) : base(options){
            
        }
    }
}