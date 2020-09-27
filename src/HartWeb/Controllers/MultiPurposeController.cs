using Hart.Contracts;
using Hart.Domain.Interfaces.Services;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HartWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MultiPurposeController : Controller
    {
        private readonly IFormsService _formsService;
        private readonly ILogger<MultiPurposeController> _logger;

        public MultiPurposeController(IFormsService contactFormService, ILogger<MultiPurposeController> logger)
        {
            _formsService = contactFormService;
            _logger = logger;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult> ProcessContactForm([FromBody] ContactFormRequest request)
        {
            _logger.LogTrace($"--> {nameof(ProcessContactForm)}()");

            await _formsService.SubmitContactForm(request);

            return Ok();
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult> ProcessInquiryForm([FromBody] InquiryFormRequest request)
        {
            _logger.LogTrace($"--> {nameof(ProcessInquiryForm)}()");

            await _formsService.SubmitInquiryForm(request);

            return Ok();
        }
    }
}

