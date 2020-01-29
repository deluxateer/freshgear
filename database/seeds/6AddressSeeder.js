'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| AddressSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AddressSeeder {
  async run () {
    try {
      const address = await Database.raw(`
        INSERT INTO freshgear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        VALUES ("4 main st", "apt 2", "miami", "FL", "USA", "34567", "shipping", 1)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const address = await Database.raw(`
        INSERT INTO freshgear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        VALUES ("358 bleeker st", "apt 2", "miami", "FL", "USA", "34567", "billing", 1)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const address = await Database.raw(`
        INSERT INTO freshgear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        VALUES ("328 grand ave", "apt 4g", "brooklyn", "NY", "USA", "11745", "shipping", 2)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const address = await Database.raw(`
        INSERT INTO freshgear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        VALUES ("358 billy st", "", "flushing", "NY", "USA", "11358", "billing", 2)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const address = await Database.raw(`
       INSERT INTO freshgear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        VALUES ("11 gerome ave", "", "bronx", "NY", "USA", "11458", "shipping", 3)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const address = await Database.raw(`
       INSERT INTO freshgear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        VALUES ("11 gerome ave", "", "bronx", "NY", "USA", "11458", "billing", 3)
      `);
    } catch(err) {
      console.log(err);
    }

    console.log('Added addresses to customers');
  }
}

module.exports = AddressSeeder
