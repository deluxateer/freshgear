'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RoleSeeder {
  async run () {
    try {
      const customer = await Database.raw(`
        INSERT INTO freshgear.roles (title)
        VALUES ("customer")
      `);

      console.log('added Customer to Roles table');
    } catch(err) {
      console.log(err);
    }
    try {
      const service = await Database.raw(`
        INSERT INTO freshgear.roles (title)
        VALUES ("service")
      `);

      console.log('added Service to Roles table');
    } catch(err) {
      console.log(err);
    }
    try {
      const admin = await Database.raw(`
        INSERT INTO freshgear.roles (title)
        VALUES ("admin")
      `);

      console.log('added Admin to Roles table');
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = RoleSeeder
