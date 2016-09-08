using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJsUpload.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public void UploadFile(HttpPostedFileBase file)
        {
            if (file != null)
            {
                file.SaveAs(Server.MapPath("~/UploadFile/") + file.FileName);
            }
        }
    }
}