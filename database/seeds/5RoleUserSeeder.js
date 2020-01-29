'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| RoleUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RoleUserSeeder {
  async run () {
    try {
      const customer = await Database.raw(`
        INSERT INTO freshgear.role_user (role_id, user_id)
        VALUES (1, 1)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const customer = await Database.raw(`
        INSERT INTO freshgear.role_user (role_id, user_id)
        VALUES (1, 2)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const customer = await Database.raw(`
        INSERT INTO freshgear.role_user (role_id, user_id)
        VALUES (1, 3)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const customer = await Database.raw(`
        INSERT INTO freshgear.role_user (role_id, user_id)
        VALUES (2, 4)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const customer = await Database.raw(`
        INSERT INTO freshgear.role_user (role_id, user_id)
        VALUES (3, 5)
      `);
    } catch(err) {
      console.log(err);
    }

    console.log('Added roles to 5 users on Role_User table')
  }
}

module.exports = RoleUserSeeder
