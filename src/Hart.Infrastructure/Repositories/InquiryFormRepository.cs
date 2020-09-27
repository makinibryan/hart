using Hart.Contracts;
using Hart.Data.Access;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Repositories;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Hart.Infrastructure.Repositories
{
    public class InquiryFormRepository : IInquiryFormRepository
    {
        private readonly HartAppsDbContext _context;
        private readonly ILogger<InquiryFormRepository> _logger;

        public InquiryFormRepository(HartAppsDbContext context, ILogger<InquiryFormRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task Add(InquiryForm form)
        {
            try
            {
                await _context.AddAsync(form);
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);
            }           
        }

        public async Task Commit()
        {
            await _context.SaveChangesAsync();
        }
    }
}
