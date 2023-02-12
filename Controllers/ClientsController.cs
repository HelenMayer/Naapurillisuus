using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
namespace Naapurillisuus.Controllers;

[ApiController]
[Route("api/Client")]
public class ClientsController : ControllerBase
{

    [HttpGet] 
    public IEnumerable<Client> Get()
    {
        return new []
        {
            new Client {firstName = "Ella", lastName = "Mäkki"}
        };
    }
}
