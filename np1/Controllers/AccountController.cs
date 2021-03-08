using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using np1.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace np1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        [HttpPost]
        [Route("[action]")]
        public IActionResult Register(CreateRegisterViewModel createRegisterViewModel)
        {
            Console.WriteLine(createRegisterViewModel);


            // TODO : send this data to DB

            if (ModelState.IsValid)
                return Ok(new { message = "User Created Successfully", id = "PRDFST0001" });
            else
                return BadRequest(ModelState);
        }
    }
}
