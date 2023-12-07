namespace JWTWebApiAuth.dto
{
    public class CarrierDto
    {
        public string Title { get; set; } = string.Empty;

        public string Description {  get; set; }

        public IFormFile Image { get; set; }
    }
}
