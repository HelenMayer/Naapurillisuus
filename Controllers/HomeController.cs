using Microsoft.AspNetCore.Mvc;

namespace Naapurillisuus.Controllers;
public class HomeController : Controller
{
    [HttpGet]
    public ActionResult IndexMain()
    {
        return View();
    }
}
