namespace ProductAPI.Repositories
{
    public interface IRepository<TEntity, T2> where TEntity : class
    {
        List<TEntity> GetAll();
        TEntity GetById(T2 id);
        TEntity Insert(TEntity entity);
        void Delete(T2 id);
        void Update(TEntity entity, T2 id);
    }
}
