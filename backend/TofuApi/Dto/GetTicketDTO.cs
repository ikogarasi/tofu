namespace TofuApi.Dto
{
    public class GetTicketDTO
    {
        public string From { get; set; }
        public string To { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double Price { get; set; }
        public int PassangersAmount { get; set; }
        public string CarrierName { get; set; }
    }
}
