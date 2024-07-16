using System.ComponentModel.DataAnnotations;

namespace ProductAPI.DTOs
{
    public class ProductDTO
    {
        public int IdProduct { get; set; }
        public string NameProduct { get; set; }

        [DisplayFormat(DataFormatString = "{0:F2}", ApplyFormatInEditMode = true)]
        public decimal PriceProduct { get; set; }
    }
}
