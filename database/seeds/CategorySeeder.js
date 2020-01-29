'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategorySeeder {
  async run () {
    try {
      const category1 = await Database.raw(`
        INSERT INTO freshgear.categories (title)
        VALUES ("Male")
      `);

      console.log('added Male to Categories table');
    } catch(err) {
      console.log(err);
    }
    try {
      const category2 = await Database.raw(`
        INSERT INTO freshgear.categories (title)
        VALUES ("Female")
      `);

      console.log('added Female to Categories table');
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = CategorySeeder
