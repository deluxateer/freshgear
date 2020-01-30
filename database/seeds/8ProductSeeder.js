'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductSeeder {
  async run () {
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        VALUES ("LBN3465WHITE", "Lebron 13", "The high-performance Nike LeBron 13 goes patriotic with this “USA” colorway repping the States in Midnight Navy with red and white accents. Salute!", "/img/products/nike-lebron-13-white.png", "white", 300, 100, "leather", 1, 1, 5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        VALUES ("AIRMX453464GRN", "OG", "Fill Description", "/img/products/nike-airmax-95-og-green.png", "green", 400, 100, "leather", 1, 2, 5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        VALUES ("JRDN08098RD", "Retro High OG", "Fill Description", "/img/products/jordan-1-retrohighog-red.png", "red", 200, 100, "leather", 5, 1, 5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        VALUES ("JRDN242333BLE", "Retro Low BG", "Fill Description", "/img/products/jordan-11-retrolowbg-babyblue.png", "blue", 250, 100, "leather", 5, 15, 5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        VALUES ("YZY32432GRY", "Boost 700", "Fill Description", "/img/products/adidas-yeezy-boost700-grey.png", "grey", 550, 100, "leather", 2, 4, 5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        VALUES ("JMS94384PNDBLK", "Panda Bear", "Fill Description", "/img/products/adidas-jeremyscott-pandabear-black.png", "black", 550, 100, "fur", 2, 6, 5)
      `);
    } catch(err) {
      console.log(err);
    }
    
    console.log('Added products to products table');
  }
}

module.exports = ProductSeeder
