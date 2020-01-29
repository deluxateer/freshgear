'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| BrandSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BrandSeeder {
  async run () {
    try {
      const brand1 = await Database.raw(`
        INSERT INTO freshgear.brands (title)
        VALUES ("Nike")
      `);

      console.log('added Nike to Brands table');
    } catch(err) {
      console.log(err);
    }
    try {
      const brand2 = await Database.raw(`
        INSERT INTO freshgear.brands (title)
        VALUES ("Adidas")
      `);

      console.log('added Adidas to Brands table');
    } catch(err) {
      console.log(err);
    }
    try {
      const brand3 = await Database.raw(`
        INSERT INTO freshgear.brands (title)
        VALUES ("Converse")
      `);

      console.log('added Converse to Brands table');
    } catch(err) {
      console.log(err);
    }
    try {
      const brand4 = await Database.raw(`
        INSERT INTO freshgear.brands (title)
        VALUES ("Reebok")
      `);

      console.log('added Reebok to Brands table');
    } catch(err) {
      console.log(err);
    }
    try {
      const brand5 = await Database.raw(`
        INSERT INTO freshgear.brands (title)
        VALUES ("Jordan")
      `);

      console.log('added Jordan to Brands table');
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = BrandSeeder
