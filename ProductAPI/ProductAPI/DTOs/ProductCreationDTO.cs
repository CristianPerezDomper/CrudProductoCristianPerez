using System.ComponentModel.DataAnnotations;

namespace ProductAPI.DTOs
{
    public class ProductCreationDTO
    {
        [Required(ErrorMessage = "El nombre del producto es obligatorio")]
        [StringLength(100)]
        public string NameProduct { get; set; }
        [Required(ErrorMessage = "El precio del producto es obligatorio")]
        [Range(0.01, double.MaxValue, ErrorMessage = "El precio del producto debe ser mayor a 0")]
        [DataType(DataType.Currency)]
        public decimal PriceProduct { get; set; }
    }
}
