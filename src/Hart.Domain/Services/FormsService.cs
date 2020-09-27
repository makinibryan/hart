using Hart.Contracts;
using Hart.Contracts.Enums;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Repositories;
using Hart.Domain.Interfaces.Services;
using Microsoft.Extensions.Logging;
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
        private readonly ILogger<FormsService> _logger;

        public FormsService(
            IContactFormRepository contactFormRespository, 
            IInquiryFormRepository inquiryFormRespository, 
            IEmailService emailService,
            ILogger<FormsService> logger
            )
        {
            _contactFormRespository = contactFormRespository;
            _inquiryFormRespository = inquiryFormRespository;
            _emailService = emailService;
            _logger = logger;
        }

        /// <summary>
        /// Submit contact and send email
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task SubmitContactForm(ContactFormRequest request)
        {
            _logger.LogTrace($"--> {nameof(SubmitContactForm)}()");

            await SaveContactForm(request);  
            RequestType requestType = RequestType.Contact;
            await _emailService.SendEmailAsync(request, requestType);
        }

        /// <summary>
        /// Submit inquiry and send email
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task SubmitInquiryForm(InquiryFormRequest request)
        {
            _logger.LogTrace($"--> {nameof(SubmitInquiryForm)}()");

            await SaveInquiryForm(request);
            RequestType requestType = RequestType.Inqury; 
            await _emailService.SendEmailAsync(request, requestType);
        }

        /// <summary>
        /// Saves contact to db
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Saves inquiry to db
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
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
