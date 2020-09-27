using Hart.Contracts;
using Hart.Contracts.Enums;
using Hart.Domain.EntityModels;
using Org.BouncyCastle.Asn1.Ocsp;
using System.Threading.Tasks;

namespace Hart.Domain.Interfaces.Services
{
    public interface IEmailService<T>
    {        
        Task SendEmailAsync(T request, RequestType requestType);
    }
}
