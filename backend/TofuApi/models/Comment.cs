namespace TofuApi.models
{
    public class Comment
    {
        public int Id { get; set; }
        public string UserEmail { get; set; }
        public string Text { get; set; }
        public int Rate { get; set; }
        public int UserId { get; set; }
        public int CarrierId { get; set; }

        public User User { get; set; }
        public Carrier Carrier { get; set; }
    }
}
