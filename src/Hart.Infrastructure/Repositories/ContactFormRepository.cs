﻿using Hart.Data.Access;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Repositories;
using System.Threading.Tasks;

namespace Hart.Infrastructure.Repositories
{
    public class ContactFormRepository : IContactFormRepository
    {
        private readonly HartAppsDbContext _context;

        public ContactFormRepository(HartAppsDbContext context)
        {
            _context = context;
        }
        public async Task Add(ContactForm form)
        {
            await _context.AddAsync(form);            
        }

        public async Task Commit()
        {
            await _context.SaveChangesAsync();
        }
    }
}
