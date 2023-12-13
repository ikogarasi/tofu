namespace TofuApi.Dto
{
    public class TicketDTO
    {
        public string From { get; set; }
        public string To { get; set; }
        public DateTime StartDate { get; set; }
        public int PassangersAmount { get; set; }
    }
}
