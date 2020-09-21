using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace HartWebApp.Authorization
{
    public class TokenLoader : ITokenLoader
    {
        private readonly IConfiguration _configuration;
        private readonly IHttpClientFactory _httpClientFactory;

        public TokenLoader(IConfiguration configuration, IHttpClientFactory httpClientFactory)
        {
            _configuration = configuration;
            _httpClientFactory = httpClientFactory;
        }

        public async Task<string> GetToken(string resourceId)
        {
            var client = _httpClientFactory.CreateClient();

            client.BaseAddress = new Uri(_configuration["ApplicationSettings:AuthenticationTokenUrl"]);

            var keyValues = new Dictionary<string, string>
            {
                { "grant_type","client_credentials" },
                { "client_id",_configuration["ApplicationSettings:ClientId"] },
                { "client_secret",_configuration["ApplicationSettings:ClientSecret"]},
                { "resource", resourceId}
            };

            var response = await client.PostAsync("", new FormUrlEncodedContent(keyValues));
            var accessToken = (await JsonSerializer.DeserializeAsync<TokenResponse>(await response.Content.ReadAsStreamAsync())).access_token;
            return accessToken;
        }
    }
}
