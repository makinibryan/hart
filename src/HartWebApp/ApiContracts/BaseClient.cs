using HartWebApp.Models;
using HartWebApp.Models.Enums;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace HartWebApp.ApiContracts
{
    public sealed class BaseClient : IBaseClient
    {
        private readonly ILogger<BaseClient> _logger;

        public BaseClient(ILogger<BaseClient> logger)
        {
            _logger = logger;
        }

        public async Task<ApiResponseObject<T>> GetAsync<T>(string requestUrl, string bearerToken, X509Certificate2 clientCertificate = null, IDictionary<string, string> headers = null)
        {
            return await CreateResponseAsync<T>(requestUrl, HttpMethodType.Get, null, bearerToken, clientCertificate, headers);
        }

        public async Task<ApiResponseObject<T>> PostAsync<T>(string requestUrl, object jsonObject, string bearerToken, X509Certificate2 clientCertificate = null, IDictionary<string, string> headers = null)
        {
            return await CreateResponseAsync<T>(requestUrl, HttpMethodType.Post, jsonObject, bearerToken, clientCertificate, headers);
        }

        private async Task<ApiResponseObject<T>> CreateResponseAsync<T>(string requestUrl, HttpMethodType method, object jsonObject = null, string bearerToken = null, X509Certificate2 clientCertificate = null, IDictionary<string, string> headers = null)
        {
            ApiResponseObject<T> response = new ApiResponseObject<T>();
            try
            {
                Task<HttpResponseMessage> task = null;
                HttpResponseMessage httpResponseMessage = null;
                var handler = new HttpClientHandler();

                if (clientCertificate != null)
                {
                    handler.ClientCertificateOptions = ClientCertificateOption.Manual;
                    handler.ClientCertificates.Add(clientCertificate);
                }

                HttpClient client = CreateClientWithHeaders(handler, bearerToken, headers);

                switch (method)
                {
                    case HttpMethodType.Get:
                        HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, requestUrl);
                        task = client.SendAsync(request);
                        break;

                    case HttpMethodType.Post:
                        var content = new StringContent(JsonConvert.SerializeObject(jsonObject), Encoding.UTF8, "application/json");
                        task = client.PostAsync(requestUrl, content);
                        break;

                    default:
                        task = null;
                        break;
                }

                if (task == null)
                {
                    throw new NotImplementedException(method + " Method has not been implemented");
                }

                httpResponseMessage = await task;

                if (httpResponseMessage.IsSuccessStatusCode)
                {
                    response.Data = JsonConvert.DeserializeObject<T>(await ExtractDataToStringAsync(httpResponseMessage));
                    response.WasSuccessful = true;
                }
                else
                {
                    // log the error response
                    _logger.LogTrace(await ExtractDataToStringAsync(httpResponseMessage));
                    response.WasSuccessful = false;
                }
                response.ResponseCode = httpResponseMessage.StatusCode.ToString();
                response.ResponseReason = httpResponseMessage.ReasonPhrase.ToString();
            }
            catch (Exception exp)
            {
                response.ErrorMessages.Add(new ErrorMessage { Description = exp.Message.ToString(), Source = "HTTP Request" });
                response.WasSuccessful = false;
                response.ResponseCode = HttpStatusCode.InternalServerError.ToString();
                response.ResponseReason = HttpStatusCode.InternalServerError.ToString();
            }

            return response;
        }

        private HttpClient CreateClientWithHeaders(HttpClientHandler handler, string bearerToken, IDictionary<string, string> headers = null)
        {
            HttpClient client = new HttpClient(handler);
            if (bearerToken != null)
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", bearerToken);
            }

            if (headers != null && headers.Any())
            {
                foreach (KeyValuePair<string, string> kvp in headers)
                {
                    client.DefaultRequestHeaders.TryAddWithoutValidation(kvp.Key, kvp.Value);
                }
            }
            return client;
        }

        private async Task<string> ExtractDataToStringAsync(HttpResponseMessage httpResponseMessage)
        {
            string responseContentString = await httpResponseMessage.Content.ReadAsStringAsync();
            return responseContentString;
        }
    }
}
