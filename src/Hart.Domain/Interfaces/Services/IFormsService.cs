using Hart.Contracts;
using System.Threading.Tasks;

namespace Hart.Domain.Interfaces.Services
{

    public interface IFormsService
    {       
        Task SubmitContactForm(ContactFormRequest request);
        Task SubmitInquiryForm(InquiryFormRequest request);
    }
}
