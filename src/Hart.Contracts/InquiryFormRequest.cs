﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Hart.Contracts
{
    public class InquiryFormRequest : FormRequestBase
    {
        public string Title { get; set; }
        public string TourPackage { get; set; }
        public int NumberOfAdutls { get; set; }
        public int NumberOfChildren { get; set; }
        public DateTime ArrivalDate { get; set; }
        public DateTime DepartureDate { get; set; }
        public string ArrivalPoint { get; set; }
        public string DeparturePoint { get; set; }
        public string HowDidYouHearAboutUs { get; set; }
        public bool NewsLetter { get; set; }        
    }
}
