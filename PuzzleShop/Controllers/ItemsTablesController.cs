using PuzzleShop.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Description;



namespace Puzzle.Controllers
{
    public class ItemsTablesController : ApiController
    {
        private PuzzleShopEntities db = new PuzzleShopEntities();

        // GET: api/ItemsTables
        public IQueryable<ItemsTable> GetItemsTable()
        {
            db.Configuration.ProxyCreationEnabled = false;
             return db.ItemsTables.AsQueryable();
        }
        public IQueryable<Category> GetCategoryTable()
        {
            db.Configuration.ProxyCreationEnabled = false;
    
            return db.Categories.AsQueryable();
        }
        public IHttpActionResult GetSubCategoryTable(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            //Subcategory subcategory = new Subcategory();
            List<Subcategory> subcategory = new List<Subcategory>();
            foreach (var item in db.Subcategories)
            {
                if (item.CategoryId == id)
                {
                    subcategory.Add(item);
                }
            }
            //subcategory. db.Subcategories.fi
            return Ok(subcategory);
        }
        [HttpPost]
        public IHttpActionResult PostSubItems(Subcategory subName)
        {
            db.Configuration.ProxyCreationEnabled = false;
            int subId = 0; 
            List<ItemsTable> subItems = new List<ItemsTable>();
            foreach (var item in db.Subcategories)
            {
                if (item.SubName == subName.SubName)
                {
                    subId = item.Id;
                    foreach (var item2 in db.ItemsTables)
                    {
                        if (item2.SubcategoryId == subId)
                        {
                            subItems.Add(item2);
                        }
                    }
                }


            }
            return Ok(subItems);
        }

       
        // GET: api/ItemsTables/5
        [ResponseType(typeof(ItemsTable))]
        public IHttpActionResult GetItemsTable(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            ItemsTable itemsTable = db.ItemsTables.Find(id);
            if (itemsTable == null)
            {
                return NotFound();
            }
            
            return Ok(itemsTable);
        }

        // PUT: api/ItemsTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutItemsTable(int id, ItemsTable itemsTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != itemsTable.Id)
            {
                return BadRequest();
            }

            db.Entry(itemsTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemsTableExists(id))
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


        [ResponseType(typeof(ItemsTable))]
        public IHttpActionResult PostItemsTable(ItemsTable itemsTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ItemsTables.Add(itemsTable);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = itemsTable.Id }, itemsTable);
        }
        [ResponseType(typeof(ItemsTable))]
        public IHttpActionResult PostItemsTableOne(ItemsTable itemsTable)
        {
            db.Configuration.ProxyCreationEnabled = false;
            ItemsTable itemsTable2 = new ItemsTable();
            itemsTable2 = db.ItemsTables.Find(itemsTable.Id);
            if (itemsTable2 == null)
            {
                return NotFound();
            }
         
            return Ok(itemsTable2);
        }
        //[ResponseType(typeof(ItemsTable))]
        //[HttpPost]
        //public IHttpActionResult PostItemsTable(int[] data)
        //{
        //    db.Configuration.ProxyCreationEnabled = false;
        
        //    List<ItemsTable> itemsTable = new List<ItemsTable>();
        //    for(int i=0; i<=data.Length-1;i++)
        //    {
        //        itemsTable.Add(db.ItemsTables.Find(data[i]));     
        //    }
        //    return Ok(itemsTable);
        //}

        // DELETE: api/ItemsTables/5
        [ResponseType(typeof(ItemsTable))]
        public IHttpActionResult DeleteItemsTable(int id)
        {
            ItemsTable itemsTable = db.ItemsTables.Find(id);
            if (itemsTable == null)
            {
                return NotFound();
            }

            db.ItemsTables.Remove(itemsTable);
            db.SaveChanges();

            return Ok(itemsTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ItemsTableExists(int id)
        {
            return db.ItemsTables.Count(e => e.Id == id) > 0;
        }
    }
}