using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Test666.Controllers
{
    public class CoverController : ApiController
    {
        // GET: api/Cover
        public IEnumerable<CoverDB> Get()
        {
            CoverLinkDataContext db = new CoverLinkDataContext();
            
            var data = from item in db.CoverDBs
                       orderby item.Id
                       select item;
               return data; 
        }

        // GET: api/Cover/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Cover
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Cover/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Cover/5
        public void Delete(int id)
        {
        }
    }
}
