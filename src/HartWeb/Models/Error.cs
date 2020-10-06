using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HartWeb.Models
{
    public class Error
    {
        public string ErrorCode { get; set; }
        public string ErrorDescription { get; set; }
        public string FieldInError { get; set; }
    }
}
