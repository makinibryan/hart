using Hart.Domain.EntityModels;

namespace Hart.Domain.Interfaces.Repositories
{
    public interface IContactFormRepository
    {
        void Add(ContactForm ContactForm);
        void Commit();
    }
}
