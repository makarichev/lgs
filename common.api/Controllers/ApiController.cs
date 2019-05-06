using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dapper;

namespace common.api.Controllers
{
    [Route("api")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private SqlConnection _dapper;

        public ValuesController(SqlConnection dapper)
        {
            _dapper = dapper;
        }

        [HttpGet("tovs")]
        public ActionResult<object> GetTovs()
        {
            return Ok(
                _dapper.Query<dynamic>(@"
                    select top 100 tov_id, name from tovs    
                ")
                );
        }
    }
}
