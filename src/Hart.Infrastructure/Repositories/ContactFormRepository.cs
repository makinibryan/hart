using Hart.Data.Access;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Repositories;

namespace Hart.Infrastructure.Repositories
{
    public class ContactFormRepository : IContactFormRepository
    {
        private readonly HartAppsDbContext _context;

        public ContactFormRepository(HartAppsDbContext context)
        {
            _context = context;
        }
        public void Add(ContactForm form)
        {
            _context.Add(form);            
        }

        public void Commit()
        {
            _context.SaveChanges();
        }
    }
}
