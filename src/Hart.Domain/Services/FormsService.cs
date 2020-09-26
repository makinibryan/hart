using Hart.Contracts;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Repositories;
using Hart.Domain.Interfaces.Services;
using System.Threading.Tasks;

namespace Hart.Domain
{
    /// <summary>
    /// Process forms requests
    /// </summary>
    public class FormsService : IFormsService
    {
        IInquiryFormRepository _inquiryFormRespository;
        IContactFormRepository _contactFormRespository;
        IEmailService _emailService;

        public FormsService(IContactFormRepository contactFormRespository, IInquiryFormRepository inquiryFormRespository, IEmailService emailService)
        {
            _contactFormRespository = contactFormRespository;
            _inquiryFormRespository = inquiryFormRespository;
            _emailService = emailService;
        }

        /// <summary>
        /// Saves incoming contact form request to databse and send email
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task SubmitContactForm(ContactFormRequest request)
        {
            // Todo: Request to be saved to db
            //SaveContactForm(request);           
            await _emailService.SendEmailAsync(request);
        }

        /// <summary>
        /// Saves incoming inquiry form request to databse and send email
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task SubmitInquiryForm(InquiryFormRequest request)
        {
            //await SaveInquiryForm(request);           
            await _emailService.SendEmailAsync(request);
        }

        private async Task SaveContactForm(ContactFormRequest request) 
        {
            var form = new ContactForm
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Message,
                Phone = request.Message,
                Message = request.Message
            };

            await _contactFormRespository.Add(form);
            await _contactFormRespository.Commit();           
        }

        private async Task SaveInquiryForm(InquiryFormRequest request)
        {
            var form = new InquiryForm
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Message,
                Phone = request.Message,
                Message = request.Message,
                Title = request.Title,
                TourPackage = request.TourPackage,
                NumberOfAdults = request.NumberOfAdutls,
                NumberOfChildren = request.NumberOfChildren,
                ArrivalDate = request.ArrivalDate,
                DepartureDate = request.DepartureDate,
                ArrivalPoint = request.ArrivalPoint,
                DeparturePoint = request.DeparturePoint,
                HowDidYouHearAboutUs = request.HowDidYouHearAboutUs,
                NewsLetter = request.NewsLetter
            };

            await _inquiryFormRespository.Add(form);
            await _inquiryFormRespository.Commit();
        }
    }
}
