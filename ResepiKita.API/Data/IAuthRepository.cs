using System.Threading.Tasks;
using ResepiKita.API.Models;

namespace ResepiKita.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}