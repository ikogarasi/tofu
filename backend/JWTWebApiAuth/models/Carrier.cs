using MySql.Data.MySqlClient.X.XDevAPI.Common;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JWTWebApiAuth.models
{
    public class Carrier
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        [Column(TypeName = "LONGBLOB")]
        [MaxLength]
        public byte[] Image { get; set; }
    }
}
