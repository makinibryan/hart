using System;
using System.Collections.Generic;
using System.Text;

namespace Hart.Contracts
{
    public class FormRequestBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }
    }
}
