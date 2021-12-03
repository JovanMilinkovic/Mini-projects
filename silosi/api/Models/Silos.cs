using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api.Models
{
    [Table("Silos")]
    public class Silos{
        [Key]
        [Column("ID")]
        public int ID {get; set;}

        [Column("Oznaka")]
        public string Oznaka { get; set; }
        [Column("Kapacitet")]
        public int Kapacitet {get; set;}
        [Column("TrenutnaVrednost")]
        public int TrenutnaVrednost {get; set;}
        
        [JsonIgnore]
        public virtual Fabrika Fabrika {get; set;}
    }
}