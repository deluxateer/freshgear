'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| TagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TagSeeder {
  async run () {
    try {
      const tag = await Database.raw(`
        INSERT INTO freshgear.tags (title)
        VALUES ("cool")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const tag = await Database.raw(`
        INSERT INTO freshgear.tags (title)
        VALUES ("hypebeast")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const tag = await Database.raw(`
        INSERT INTO freshgear.tags (title)
        VALUES ("cheap")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const tag = await Database.raw(`
        INSERT INTO freshgear.tags (title)
        VALUES ("red")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const tag = await Database.raw(`
        INSERT INTO freshgear.tags (title)
        VALUES ("baby blue")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const tag = await Database.raw(`
        INSERT INTO freshgear.tags (title)
        VALUES ("new")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const tag = await Database.raw(`
        INSERT INTO freshgear.tags (title)
        VALUES ("fresh")
      `);
    } catch(err) {
      console.log(err);
    }
    
    console.log('Added tags to tags table');
  }
}

module.exports = TagSeeder
