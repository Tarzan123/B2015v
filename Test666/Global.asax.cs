﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;

namespace Test666
{
    public class Global : HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            GlobalConfiguration.Configure(WebApiConfig.Register);

            /*RouteTable.Routes.MapHttpRoute(
                name:"default",
                routeTemplate: "api/{controller}/{id}",
                defaults: new {id = System.Web.Http.RouteParameter.Optional}
                );*/
        }
    }
}