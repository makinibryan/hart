using Hart.Contracts;
using HartWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HartWeb.Validation.ContactForm
{
    public class ContactFormValidator : IContactFormValidator
    {
        public Task<IEnumerable<Error>> ValidateContactFormRequestAsync(ContactFormRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
