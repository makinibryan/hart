using Hart.Contracts;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Repositories;
using Hart.Domain.Interfaces.Services;
using System.Threading.Tasks;

namespace Hart.Domain
{
    // Todo: Add logging and exception handling
    public class FormsService : IFormsService
    {
        IContactFormRepository _formRespository;
        IEmailService _emailService;

        public FormsService(IContactFormRepository contactFormRespository, IEmailService emailService)
        {
            _formRespository = contactFormRespository;
            _emailService = emailService;
        }

        /// <summary>
        /// Saves incoming form request to databse and send email
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task SubmitContactForm(ContactFormRequest request)
        {
            // Todo: Request to be saved to db
            //SaveForm(request);           
            await _emailService.SendEmailAsync(request);
        }

        public Task SubmitInquiryForm(InquiryFormRequest request)
        {
            //SaveForm(request);            
            //await SendEmail(request);
            //await _emailService.SendEmailAsync(request);
            throw new System.NotImplementedException();
        }

        private void SaveForm(ContactFormRequest request) 
        {
            var form = new ContactForm
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Message,
                Phone = request.Message,
                Message = request.Message
            };

            _formRespository.Add(form);
            _formRespository.Commit();           
        }    
    }
}
