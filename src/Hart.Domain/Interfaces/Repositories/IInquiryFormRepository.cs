using Hart.Domain.EntityModels;
using System.Threading.Tasks;

namespace Hart.Domain.Interfaces.Repositories
{
    public interface IInquiryFormRepository
    {
        Task Add(InquiryForm request);
        Task Commit();
    }
}
