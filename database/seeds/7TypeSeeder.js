'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TypeSeeder {
  async run () {
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Lebron James", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Air Max 95", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Posite", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Yeezy", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Pharrell Williams", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Jeremy Scott", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("One Star", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Jack Purcell", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Chuck 70", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Iverson Legacy", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Mobius", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Workout Plus ATI", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Jordan 1", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Jordan 3", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description)
        VALUES ("Jordan 11", "fill description")
      `);
    } catch(err) {
      console.log(err);
    }

    console.log('Added type to types table')
  }
}

module.exports = TypeSeeder
