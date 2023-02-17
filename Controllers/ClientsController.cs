using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Naapurillisuus.Data;

namespace Naapurillisuus.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClientsController : ControllerBase
{
  private DataContext _context;

  public ClientsController(DataContext context)
    {
        _context = context;
    }

    [HttpGet] 
    public async Task<ActionResult<List<Client>>> getClients()
    {
         return Ok(await _context.Clients.ToListAsync());
    }

    [HttpPost]
    public async Task<ActionResult<List<Client>>> CreateClient(Client person)
    {

      _context.Clients.Add(person);
      await _context.SaveChangesAsync();

      return Ok(await _context.Clients.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<Client>>> UpdateClient(Client person)
    {
      var dbClient = await _context.Clients.FindAsync(person.Id);
      if (dbClient == null)
      {
        return BadRequest("Client not found");
      }
      
      dbClient.firstName = person.firstName;
      dbClient.lastName = person.lastName;
      dbClient.email = person.email;
      dbClient.password = person.password;
      dbClient.phoneNumber = person.phoneNumber;
      dbClient.address = person.address;
      dbClient.city = person.city;
      dbClient.zip = person.zip;

      await _context.SaveChangesAsync();

      return Ok(await _context.Clients.ToListAsync());
    }

    [HttpDelete("{Id}")]
    public async Task<ActionResult<List<Client>>> DeleteClient(int Id)
    {
       var dbClient = await _context.Clients.FindAsync(Id);
      if (dbClient == null)
      {
        return BadRequest("Client not found");
      }
      _context.Clients.Remove(dbClient);

      await _context.SaveChangesAsync();

      return Ok(await _context.Clients.ToListAsync());
    }


}
