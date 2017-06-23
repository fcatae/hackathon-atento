using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Timeline.Controllers
{
    [Route("api/timeline")]
    public class TimelineController : Controller
    {
        Repository _repository = new Repository();

        public TimelineController()
        {
        }

        [HttpGet]
        public IEnumerable<Evento> List()
        {
            return _repository.ListEventos();
        }
        
    }
}
