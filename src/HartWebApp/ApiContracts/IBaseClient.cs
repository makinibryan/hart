using HartWebApp.Models;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace HartWebApp.ApiContracts
{
    public interface IBaseClient
    {
        Task<ApiResponseObject<T>> GetAsync<T>(string requestUrl, string bearerToken, X509Certificate2 clientCertificate = null, IDictionary<string, string> headers = null);
        Task<ApiResponseObject<T>> PostAsync<T>(string requestUrl, object jsonObject, string bearerToken, X509Certificate2 clientCertificate = null, IDictionary<string, string> headers = null);
    }
}
