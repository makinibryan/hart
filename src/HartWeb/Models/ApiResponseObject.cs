using System.Collections.Generic;

namespace HartWeb.Models
{
    public class ApiResponseObject<T>
    {
        public ApiResponseObject()
        {
            ErrorMessages = new List<ErrorMessage>();
        }

        public bool WasSuccessful { get; set; }
        public string ResponseCode { get; set; }
        public string ResponseReason { get; set; }
        public List<ErrorMessage> ErrorMessages { get; set; }
        public T Data { get; set; }
    }
}
