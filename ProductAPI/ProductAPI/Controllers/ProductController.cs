using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductAPI.Entities;
using ProductAPI.Repositories;
using ProductAPI.DTOs;

namespace ProductAPI.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IRepository<Product,int> _repository;
        private readonly IMapper mapper;

        public ProductController(IRepository<Product, int> repository, IMapper mapper)
        {
            _repository = repository;
            this.mapper = mapper;

        }

        [HttpGet]
        public ActionResult<List<Product>> Get() 
        {
            var products = _repository.GetAll();
            return Ok(mapper.Map<List<ProductDTO>>(products));
        }

        [HttpGet("{id:int}", Name = "getProduct")]
        public ActionResult<Product> Get(int id) 
        { 
            var product = _repository.GetById(id);

            if(product.IdProduct == null)
            {
                return NotFound();
            }
            return Ok(mapper.Map<ProductDTO>(product));
        }

        [HttpPost]
        public ActionResult Post(ProductCreationDTO productCreationDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = mapper.Map<Product>(productCreationDTO);
            var newProduct = mapper.Map<ProductDTO>(_repository.Insert(product));

            return CreatedAtAction(nameof(Get), new { idProduct = newProduct.IdProduct }, newProduct);
                        
        }

        [HttpPut("{id:int}")]
        public ActionResult Put(ProductCreationDTO productCreationDTO, int id) 
        { 
            var existingProduct = _repository.GetById(id);

            if (existingProduct.IdProduct == null) 
            {
                return NotFound();
            }

            var product = mapper.Map<Product>(productCreationDTO);
            _repository.Update(product,id);

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            var existingProduct = _repository.GetById(id);

            if(existingProduct.IdProduct == null)
            {
                return NotFound();
            }

            _repository.Delete(id);
            return NoContent();
        }


    }
}
