namespace Hart.Domain.EntityModels
{
    public class EmailSettings
    {
        public string MailServer { get; set; }
        public int MailPort { get; set; }
        public string SenderName { get; set; }
        public string SenderEmail { get; set; }
        public string SenderPassword { get; set; }
        public string RecipientName { get; set; }
        public string RecipientEmail { get; set; }
        public string SubjectContactForm { get; set; }
        public string SubjectInquiryForm { get; set; }
    }
}
