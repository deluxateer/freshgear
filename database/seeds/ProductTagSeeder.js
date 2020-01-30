'use strict'

const Database = use('Database');

/*
|--------------------------------------------------------------------------
| ProductTagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductTagSeeder {
  async run () {
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (1,2)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (1,5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (2,6)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (2,4)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (2,5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (3,3)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (3,1)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (4,3)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (4,2)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (4,5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (5,1)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (6,5)
      `);
    } catch(err) {
      console.log(err);
    }
    try {
      const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id)
        VALUES (6,3)
      `);
    } catch(err) {
      console.log(err);
    }
    
    console.log('Added tags and products to product_tag table');
  }
}

module.exports = ProductTagSeeder
