using Microsoft.AspNetCore.Mvc;
using SendGrid;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly ISendGridClient _sendGridClient;
        private readonly IConfiguration _configuration;
        public EmailController(ISendGridClient sendGridClient, IConfiguration configuration)
        {
            _sendGridClient = sendGridClient;
            _configuration = configuration;
        }

        // GET: api/<EmailController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<EmailController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<EmailController>
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] string value)
        {
            var data = $@"{{
                ""contacts"": [
                    {{
                        ""email"": ""{value}""
                    }}
                ]
            }}";


            var response = await _sendGridClient.RequestAsync(
                method: BaseClient.Method.PUT,
                urlPath: "marketing/contacts",
                requestBody: data
            );

            if (response.IsSuccessStatusCode)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<EmailController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //    _sendGridClient.MakeRequest(new HttpRequestMessage())
        //}

        // DELETE api/<EmailController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
