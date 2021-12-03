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

    public class SilosController : ControllerBase 
    {
        public Context Context { get; set; }

        public SilosController(Context context){
            Context = context;
        }

        [Route("PreuzmiSilose/{idFabrike}")]
        [HttpGet]

        public async Task<List<Silos>> PreuzmiSilose(int idFabrike){
            
            return await Context.Silosi.Include(s => s.Fabrika).Where(x => x.Fabrika.ID == idFabrike).ToListAsync();
        }

        [Route("DodajSilos/{idFabrike}")]
        [HttpPost]

        public async Task DodajSilos(int idFabrike, [FromBody] Silos silos)
        {
            Fabrika fabrika = await Context.Fabrike.FirstOrDefaultAsync(f => f.ID == idFabrike);
            silos.Fabrika = fabrika;
            Context.Silosi.Add(silos);
            await Context.SaveChangesAsync();
        }

        [Route("AzuzirajSilos/{idF}/{idS}")]
        [HttpPut]

        public async Task<ActionResult<int>> AzurirajSilos(int idF, int idS, [FromBody] int kolicina)
        {
            Silos stariSilos = await Context.Silosi.Where(x => x.Fabrika.ID == idF && x.ID == idS).FirstOrDefaultAsync();
            if(stariSilos.TrenutnaVrednost + kolicina < stariSilos.Kapacitet)
            {
                stariSilos.TrenutnaVrednost += kolicina;
                await Context.SaveChangesAsync();
                return stariSilos.TrenutnaVrednost;
            }
            else
                return StatusCode(404);
                
        }
    }
}