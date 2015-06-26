using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PuzzleShop.Models;

namespace PuzzleShop.Controllers
{
    public class LoginsController : ApiController
    {
        private PuzzleShopEntities db = new PuzzleShopEntities();

        // GET: api/Logins
        public IQueryable<Login> GetLogins()
        {
            return db.Logins;
        }

        // GET: api/Logins/5
        [ResponseType(typeof(Login))]
        public IHttpActionResult GetLogin(int id)
        {
            Login login = db.Logins.Find(id);
            if (login == null)
            {
                return NotFound();
            }

            return Ok(login);
        }

        // PUT: api/Logins/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLogin(int id, Login login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != login.Id)
            {
                return BadRequest();
            }

            db.Entry(login).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Logins
        [ResponseType(typeof(Login))]
        public IHttpActionResult PostRegistration(Login login)
        {
            string error = "";
            Login log = new Login();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //log = db.Logins.Where(i => i.Email == login.Email).FirstOrDefault();
            //if (log != null)
            //{
            //    error = "This Email is not valid";
            //    return Ok(error);    
            //}
            //else
            //{
            db.Logins.Add(login);

            //}

            //foreach (var item in db.Logins)
            //{
            //    if (item.Email != login.Email)
            //    {
            //        db.Logins.Add(login);
            //    }
            //    else
            //    {
            //        error = "This Email is not valid";
            //        return Ok(error);

            //    }

            //}
            db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = login.Id }, login);
        }

        //  public IHttpActionResult PostRegistration(Login login)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    foreach (var item in db.Logins)
        //    {
        //        if (item.Email != login.Email)
        //        {
        //            db.Logins.Add(login);
        //            db.SaveChanges();

        //            return CreatedAtRoute("DefaultApi", new { id = login.Id }, login);
        //        }
        //        else
        //        {
        //            break;
        //        }

        //    }
        //    return Ok("eror"); 
        //}


        [ResponseType(typeof(Login))]
        public IHttpActionResult PostLogin(Login LogData)
        {
            Login login = new Login();
            login = db.Logins.Where(i => i.Password == LogData.Email && i.Password == LogData.Password).FirstOrDefault();
            //foreach (var item in db.Logins)
            //{
            //    if ((item.Email == LogData.Email) && (item.Password == LogData.Password))
            //    {
            //        login.RolesId = item.RolesId;
            //        break;
            //    }
            //}
            Login login2 = new Login();
            login2.Name = login.Name;
            login2.RolesId = login.RolesId;
            return Ok(login2);
        }


        // DELETE: api/Logins/5
        [ResponseType(typeof(Login))]
        public IHttpActionResult DeleteLogin(int id)
        {
            Login login = db.Logins.Find(id);
            if (login == null)
            {
                return NotFound();
            }

            db.Logins.Remove(login);
            db.SaveChanges();

            return Ok(login);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LoginExists(int id)
        {
            return db.Logins.Count(e => e.Id == id) > 0;
        }
    }
}