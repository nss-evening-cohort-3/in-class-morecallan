using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web.Http;
using BasicsOfForms.Models;

namespace BasicsOfForms.Controllers
{
    public class AngularApiController : ApiController
    {
        public HttpResponseMessage Post([FromBody] User user)
        {
            return Request.CreateResponse(HttpStatusCode.OK, user);
        }
        
    }
}
