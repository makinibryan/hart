using Hart.Contracts;
using System;

namespace Hart.Domain.EntityModels
{
    public class InquiryForm : FormRequestBase
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string TourPackage { get; set; }
        public int NumberOfAdults { get; set; }
        public int NumberOfChildren { get; set; }
        public DateTime ArrivalDate { get; set; }
        public DateTime DepartureDate { get; set; }
        public string ArrivalPoint { get; set; }
        public string DeparturePoint { get; set; }
        public string HowDidYouHearAboutUs { get; set; }
        public bool NewsLetter { get; set; }

    }
}
