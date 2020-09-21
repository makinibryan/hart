namespace HartWebApp.ApiContracts.Contracts
{
    public class Error
    {
        public Error(string errorDescription)
        {
            ErrorDescription = errorDescription;
        }

        public string ErrorDescription { get; }
        public bool Handled { get; set; }
    }
}
