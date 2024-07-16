using ProductAPI.DTOs;
using ProductAPI.Entities;
using AutoMapper;

namespace ProductAPI.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() 
        { 
            CreateMap<ProductDTO,Product>().ReverseMap();
            CreateMap<ProductCreationDTO,Product>();  
        }
    }
}
