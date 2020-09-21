using Hart.Contracts;
using Hart.Domain.EntityModels;
using System.Threading.Tasks;

namespace Hart.Domain.Interfaces.Services
{
    public interface IEmailService
    {        
        Task SendEmailAsync(FormRequestBase request);
    }
}
