using Dapper;
using Microsoft.Extensions.Options;
using MySqlConnector;
using ProductAPI.Entities;
using System.Data;

namespace ProductAPI.Repositories
{
    public class ProductRepository : IRepository<Product, int>
    {
        private readonly IDbConnection _db;
        

        public ProductRepository(IOptions<ConnectionStringList> connectionStrings)
        {
            _db = new MySqlConnection(connectionStrings.Value.Default);
        }
        public void Delete(int idProduct)
        {
            var parameters = new DynamicParameters();
            parameters.Add("_IdProduct", idProduct);
            _db.Execute("DeleteProduct",parameters, commandType: CommandType.StoredProcedure);
        }

        public List<Product> GetAll()
        {
            return _db.Query<Product>("GetAllProducts", commandType: CommandType.StoredProcedure).ToList();
        }

        public Product GetById(int idProduct)
        {
            var parameters = new DynamicParameters();
            parameters.Add("_IdProduct", idProduct);
            return _db.Query<Product>("GetProductoById", parameters, commandType: CommandType.StoredProcedure).FirstOrDefault();
        }

        public Product Insert(Product entity)
        {
            
            var parameters = new DynamicParameters();
            parameters.Add("_NameProduct", entity.NameProduct);
            parameters.Add("_PriceProduct", entity.PriceProduct);

            var idProduct = _db.Query<int>("AddNewProduct", parameters, commandType: CommandType.StoredProcedure).Single();
            entity.IdProduct = idProduct;
            return entity;

        }

        public void Update(Product entity, int idProduct)
        {
            entity.IdProduct = idProduct;

            var parameters = new DynamicParameters();
            parameters.Add("_IdProduct", entity.IdProduct);
            parameters.Add("_NameProduct", entity.NameProduct);
            parameters.Add("_PriceProduct", entity.PriceProduct);

            _db.Execute("UpdateProduct", parameters, commandType: CommandType.StoredProcedure);
        }
    }
}
