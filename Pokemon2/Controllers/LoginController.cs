using Microsoft.AspNetCore.Mvc;
using Pokemon.Services.Entities;

namespace Pokemon2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public ActionResult Post([FromBody]LoginRequest loginRequest)
        {
            if(loginRequest.login.Equals("bia") && loginRequest.password.Equals("bia"))
            {
                return StatusCode(200);
            }
            return StatusCode(200);
        }
    }
}
