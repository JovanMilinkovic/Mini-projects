using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class FabrikaController : ControllerBase 
    {
        public Context Context { get; set; }

        public FabrikaController(Context context){
            Context = context;
        }

        [Route("PreuzmiFabrike")]
        [HttpGet]

        public async Task<List<Fabrika>> PreuzmiFabrike(){
            
            return await Context.Fabrike.Include(s => s.Silosi).ToListAsync();
        }

        [Route("DodajFabriku")]
        [HttpPost]

        public async Task DodajFabriku([FromBody] Fabrika fabrika)
        {
            Context.Fabrike.Add(fabrika);
            await Context.SaveChangesAsync();
        }

    }
}
