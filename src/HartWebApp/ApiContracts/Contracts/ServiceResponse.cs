using System.Collections.Generic;

namespace HartWebApp.ApiContracts.Contracts
{
    public class ServiceResponse<TData>
    {
        public ServiceResponse(TData data, List<Error> errors)
        {
            Data = data;
            Errors = errors ?? new List<Error>();
        }

        public List<Error> Errors { get; private set; }
        public TData Data { get; set; }
        public bool Success => Errors.Count == 0;
    }
}