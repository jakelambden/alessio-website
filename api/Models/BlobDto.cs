namespace api.Models
{
    public class BlobDto
    {
        public string? Uri { get; set; }
        public string? Name { get; set; }
        public string? Collection { get; set; }
        //public string? ContentType { get; set; }
        public DateTimeOffset? UploadedAt { get; set; }
        //public Stream? Content { get; set; }
    }
}
