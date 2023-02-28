using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Naapurillisuus.Data;

namespace Naapurillisuus.Controllers;

[Controller]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
  private DataContext _context;

  public TasksController(DataContext context)
    {
        _context = context;
    }

    [HttpGet] 
    public async Task<ActionResult<List<Task>>> getTasks()
    {
         return Ok(await _context.Tasks.ToListAsync());
    }

    [HttpPost]
    public async Task<ActionResult<List<Task>>> CreateTask(Task task)
    {
      _context.Tasks.Add(task);
      await _context.SaveChangesAsync();

      return Ok(await _context.Tasks.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<Task>>> UpdateTask(Task task)
    {
      var dbTask = await _context.Tasks.FindAsync(task.id);
      if (dbTask == null)
      {
        return BadRequest("Task not found");
      }
      
     dbTask.headerTask = task.headerTask;
     dbTask.descriptionTask = task.descriptionTask;

      await _context.SaveChangesAsync();

      return Ok(await _context.Tasks.ToListAsync());
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<Task>>> DeleteClient(int id)
    {
       var dbTask = await _context.Tasks.FindAsync(id);
      if (dbTask == null)
      {
        return BadRequest("Task not found");
      }
      _context.Tasks.Remove(dbTask);

      await _context.SaveChangesAsync();

      return Ok(await _context.Tasks.ToListAsync());
    }


}
