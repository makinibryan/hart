using System.Threading.Tasks;

namespace HartWebApp.Authorization
{
    public interface ITokenLoader
    {
        Task<string> GetToken(string resourceId);
    }
}
