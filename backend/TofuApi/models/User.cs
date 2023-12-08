using System.ComponentModel.DataAnnotations;

namespace TofuApi.models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string UserEmail { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }


    }
}
