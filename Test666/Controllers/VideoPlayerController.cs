using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Test666.Controllers
{
    public class VideoPlayerController : ApiController
    {
        // GET: api/VideoPlayer
        public IEnumerable<video> Get()
        {
            /* VideoLinkDataContext db = new VideoLinkDataContext();

           return db.videos.ToArray();*/

          VideoLinkDataContext db = new VideoLinkDataContext();
          var data = from item in db.videos
                      orderby item.Id
                      select item;
           return data;     

    
        }

        // GET: api/VideoPlayer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/VideoPlayer
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/VideoPlayer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/VideoPlayer/5
        public void Delete(int id)
        {
        }
    }
}
