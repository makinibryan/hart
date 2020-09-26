using Hart.Contracts;
using Hart.Domain.Interfaces.Services;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HartWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MultiPurposeController : Controller
    {
        private readonly IFormsService _formsService;
        public MultiPurposeController(IFormsService contactFormService)
        {
            _formsService = contactFormService;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult> ProcessContactForm([FromBody] ContactFormRequest request)
        {
            await _formsService.SubmitContactForm(request);

            return Ok();
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult> ProcessInquiryForm([FromBody] InquiryFormRequest request)
        {
            await _formsService.SubmitInquiryForm(request);

            return Ok();
        }

    }
}

