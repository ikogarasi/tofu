namespace TofuApi.Dto
{
    public class TicketQueryParamsDto
    {
        public string? From { get; set; } = "";
        public string? To { get; set; } = "";
        public string? StartDate { get; set; } = "";
        public int PassangersAmount { get; set; } = 0;
    }
}
