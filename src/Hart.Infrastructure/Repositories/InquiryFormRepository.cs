using Hart.Contracts;
using Hart.Data.Access;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Repositories;
using System.Threading.Tasks;

namespace Hart.Infrastructure.Repositories
{
    public class InquiryFormRepository : IInquiryFormRepository
    {
        private readonly HartAppsDbContext _context;

        public InquiryFormRepository(HartAppsDbContext context)
        {
            _context = context;
        }

        public async Task Add(InquiryForm form)
        {
            await _context.AddAsync(form);
        }

        public async Task Commit()
        {
            await _context.SaveChangesAsync();
        }
    }
}
