using HartWebApp.Authorization;
using Microsoft.Extensions.DependencyInjection;

namespace HartWebApp.ApiContracts
{
    public static class ServiceCollectionExtensions
    {
        public static void AddSharedServiceClasses(this IServiceCollection services)
        {
            services.AddScoped<ITokenLoader, TokenLoader>();
        }
    }
}
