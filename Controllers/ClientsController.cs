using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Naapurillisuus.Data;

namespace Naapurillisuus.Controllers;

[ApiController]
[Route("api/Client")]
public class ClientsController : ControllerBase
{
  private readonly DataContext _context;
  public ClientsController(DataContext context)
    {
        _context = context;
    }

    [HttpGet] 
    public async Task<ActionResult<List<Client>>> getClients()
    {
         return Ok(await _context.Clients.ToListAsync());
    }
}
