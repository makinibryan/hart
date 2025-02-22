﻿using Hart.Domain.EntityModels;
using System.Threading.Tasks;

namespace Hart.Domain.Interfaces.Repositories
{
    public interface IContactFormRepository
    {
        Task Add(ContactForm ContactForm);
        Task Commit();
    }
}
