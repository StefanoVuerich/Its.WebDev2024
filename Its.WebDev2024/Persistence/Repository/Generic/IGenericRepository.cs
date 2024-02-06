namespace Its.WebDev2024.Persistence.Repository
{
    public interface IGenericRepository<T> where T : class
    {
        void Create(T entity);
    }
}
