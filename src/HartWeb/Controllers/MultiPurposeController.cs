using Hart.Contracts;
using Hart.Domain.Interfaces.Services;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HartWeb.Controllers
{
    /// <summary>
    /// This handles all client side requests, but have to be refactored future
    /// </summary>
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

        /// <summary>
        /// Processes contact us form request
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult> ProcessContactForm([FromBody] ContactFormRequest request)
        {
            _logger.LogTrace($"--> {nameof(ProcessContactForm)}()");

            // Todo: Add validation

            await _formsService.SubmitContactForm(request);

            return Ok();
        }

        /// <summary>
        /// Processes inquiry form request
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult> ProcessInquiryForm([FromBody] InquiryFormRequest request)
        {
            _logger.LogTrace($"--> {nameof(ProcessInquiryForm)}()");

            // Todo: Add validation

            await _formsService.SubmitInquiryForm(request);

            return Ok();
        }
    }
}

