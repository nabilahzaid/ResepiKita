using System.Collections.Generic;
using System.Threading.Tasks;
using ResepiKita.API.Models;

namespace ResepiKita.API.Data
{
    public interface IResepiRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}