using System.ComponentModel.DataAnnotations;

namespace TofuApi.models
{
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double Price { get; set; }
        public int PassangersAmount { get; set; }
        public int CarrierId { get; set; }
        public Carrier Carrier { get; set; }
    }
}
