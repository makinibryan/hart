using Hart.Contracts;
using Hart.Contracts.Enums;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Services;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Threading.Tasks;

namespace Hart.Domain.Services
{    
    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;
        private readonly IHostingEnvironment _env;
        private readonly ILogger<EmailService> _logger;

        public EmailService(IOptions<EmailSettings> emailSettings, IHostingEnvironment env, ILogger<EmailService> logger)
        {
            _emailSettings = emailSettings.Value;
            _env = env;
            _logger = logger;
        }
  
        public async Task SendEmailAsync(FormRequestBase request, RequestType requestType)
        {
            _logger.LogTrace($"--> {nameof(SendEmailAsync)}()");

            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.SenderEmail));
                message.To.Add(new MailboxAddress(_emailSettings.RecipientName, _emailSettings.RecipientEmail));
                message.Subject = _emailSettings.Subject; ;

                var builder = new BodyBuilder();
                builder.HtmlBody = GetHtmlBodyContactForm(request);
                // Some ISP requires to set this otherwise it will not work.
                builder.TextBody = "-";
                message.Body = builder.ToMessageBody();

                using (var client = new SmtpClient())
                {
                    // For demo-purposes, accept all SSL certificates (in case the server supports STARTTLS)
                    client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                    if (_env.IsDevelopment())
                    {
                        // The third parameter is useSSL (true if the client should make an SSL-wrapped
                        // connection to the server; otherwise, false).
                        await client.ConnectAsync(_emailSettings.MailServer, _emailSettings.MailPort, false);
                    }
                    else
                    {
                        await client.ConnectAsync(_emailSettings.MailServer);
                    }
                    // Note: only needed if the SMTP server requires authentication
                    await client.AuthenticateAsync(_emailSettings.SenderEmail, _emailSettings.SenderPassword);
                    await client.SendAsync(message);
                    await client.DisconnectAsync(true);
                } 
            }
            catch (Exception ex)
            {               
                _logger.LogInformation(ex.Message);
            }
        }

        /// <summary>
        /// This is the email template.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        private string GetHtmlBodyContactForm(FormRequestBase request) 
        {
            var textBody = $"<!DOCTYPE html><html><head> <title>Contact Us Inquiry</title></head><body> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>Customer Service,</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td><strong>Message received from website contact us form containing the following details:</strong></td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Subject: </strong></td> <td width='350'>{_emailSettings.Subject}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Name: </strong></td> <td width='350'>{request.FirstName}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Email: </strong></td> <td width='350'>{request.Email}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Phone: </strong></td> <td width='350'>{request?.Phone}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Message: </strong></td> <td width='350'>{request.Message}</td> </tr> </table> </tr> </table></body></html>";
            return textBody;
        }

        private string GetHtmlBodyInquiryForm()
        {
            var textBody = $"<!DOCTYPE html><html><head> <title>Package Inquiry</title></head><body> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>Sales Team,</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>Message received from the website inquiry form:</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Subject: </strong></td> <td width='350'>subject here</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Title: </strong></td> <td width='350'>title here</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Name: </strong></td> <td width='350'>name here</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Email: </strong></td> <td width='350'>email here</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Phone: </strong></td> <td width='350'>phone here</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Package: </strong></td> <td width='350'>package here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Adults: </strong></td> <td width='350'>adults here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Children: </strong></td> <td width='350'>children here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Arr Date: </strong></td> <td width='350'>arrival date here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Dep Date: </strong></td> <td width='350'>departure date here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Arr Point: </strong></td> <td width='350'>arrival point here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Dep Point: </strong></td> <td width='350'>departure point here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Message: </strong></td> <td width='350'>message here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Message: </strong></td> <td width='350'>message here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Heard From: </strong></td> <td width='350'>hear about us here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Newsletter ?: </strong></td> <td width='350'>newsletter here.</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'>&nbsp;</td> <td width='350'>&nbsp;</td> </tr> </table> </tr> </table></body></html>";
            return textBody;
        }
    }
}
