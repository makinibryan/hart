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
using System.Reflection;
using System.Threading.Tasks;

namespace Hart.Domain.Services
{    
    public class EmailService<T> : IEmailService<T>
    {
        private readonly EmailSettings _emailSettings;
        private readonly IHostingEnvironment _env;
        private readonly ILogger<EmailService<T>> _logger;

        public EmailService(IOptions<EmailSettings> emailSettings, IHostingEnvironment env, ILogger<EmailService<T>> logger)
        {
            _emailSettings = emailSettings.Value;
            _env = env;
            _logger = logger;
        }

        public async Task SendEmailAsync(T request, RequestType requestType)
        {
            _logger.LogTrace($"--> {nameof(SendEmailAsync)}()");

            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.SenderEmail));
                message.To.Add(new MailboxAddress(_emailSettings.RecipientName, _emailSettings.RecipientEmail));
                message.Subject = _emailSettings.Subject; ;

                var builder = new BodyBuilder();

                if (requestType == RequestType.Contact) 
                {
                    builder.HtmlBody = GetHtmlBodyContactForm(request);
                }
                else
                {
                    builder.HtmlBody = GetHtmlBodyInquiryForm(request);
                }
               
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
        /// Get email template for contact form
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        private string GetHtmlBodyContactForm(T request) 
        {
            var textBody = string.Empty;
            try
            {
                Type t = request.GetType();
                textBody = $"<!DOCTYPE html><html><head> <title>Contact Us Inquiry</title></head><body> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>Customer Service,</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td><strong>Website: Contact us message</strong></td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Subject: </strong></td> <td width='350'>{_emailSettings.Subject}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Name: </strong></td> <td width='350'>{t.GetProperty("FirstName").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Email: </strong></td> <td width='350'>{t.GetProperty("Email").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Phone: </strong></td> <td width='350'>{t.GetProperty("Phone").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 10px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='100'><strong>Message: </strong></td> <td width='350'>{t.GetProperty("Message").GetValue(request)}</td> </tr> </table> </tr> </table></body></html>";               
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);
            }
            
            return textBody;
            
        }

        /// <summary>
        /// Get email template for inquiry form
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        private string GetHtmlBodyInquiryForm(T request)
        {
            var textBody = string.Empty;
            try
            {
                Type t = request.GetType();
                textBody = $"<!DOCTYPE html><html><head> <title>Tour Package Inquiry</title></head><body> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>Sales Team,</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td><strong>Website: Inquiry message</strong></td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Subject: </strong></td> <td width='350'>{_emailSettings.Subject}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Title: </strong></td> <td width='350'>{t.GetProperty("Title").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Name: </strong></td> <td width='350'>{t.GetProperty("FirstName").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Email: </strong></td> <td width='350'>{t.GetProperty("Email").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Phone: </strong></td> <td width='350'>{t.GetProperty("Phone").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Package: </strong></td> <td width='350'>{t.GetProperty("TourPackage").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Number of Adults: </strong></td> <td width='350'>{t.GetProperty("NumberOfAdults").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Children: </strong></td> <td width='350'>{t.GetProperty("NumberOfChildren").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Arrival Date: </strong></td> <td width='350'>{t.GetProperty("ArrivalDate").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Departure Date: </strong></td> <td width='350'>{t.GetProperty("DepartureDate").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Arrival Point: </strong></td> <td width='350'>{t.GetProperty("ArrivalPoint").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Departure Point: </strong></td> <td width='350'>{t.GetProperty("DeparturePoint").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='140'><strong>Newsletter ?: </strong></td> <td width='350'>{t.GetProperty("NewsLetter").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='200'><strong>How did you hear about us: </strong></td> <td width='350'>{t.GetProperty("HowDidYouHearAboutUs").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td>&nbsp;</td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='200'><strong>Message: </strong></td> <td width='350'>{t.GetProperty("Message").GetValue(request)}</td> </tr> </table> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td></td> </tr> <tr style='margin-top: 10px; margin-bottom: 10px;'> <table cellspacing='0' cellpadding='0' border='0' style='margin-left: 100px;'> <tr style='margin-top: 10px; margin-bottom: 10px;'> <td width='200'>&nbsp;</td> <td width='350'>&nbsp;</td> </tr> </table> </tr> </table></body></html>";
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);
            }
            
            return textBody;
        }
    }
}
