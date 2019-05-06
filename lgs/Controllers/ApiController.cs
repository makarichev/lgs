using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;

namespace lgs.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        private SqlConnection _dapper;

        public ApiController(
            SqlConnection dapper
            )
        {
            _dapper = dapper;
        }

        [HttpGet()]
        public ActionResult<object> GetData()
        {
            return Ok(
                _dapper.Query<dynamic>(@"

                    select * from sysobjects where type = 'u'

                ")
                );
        }
    }
}
