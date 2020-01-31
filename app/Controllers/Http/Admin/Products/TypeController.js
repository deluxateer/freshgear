'use strict'

const Database = use('Database');
const sanitize = use('sqlstring');

class TypeController {
  async index({ view, auth, request, response }) {
    try {
      let allTypes = await Database.raw(`
        SELECT *, DATE_FORMAT(types.updated_at, '%m/%d/%Y') as updated_at FROM types
        ORDER BY title ASC
      `);

      allTypes = allTypes[0];

      return view.render('admin/products/types/all_types', { allTypes });
    } catch(err) {
      console.log(err);

      return response.redirect('back');
    }
  }
  
  async create({ view, auth, request, response }) {
    try {
      return view.render('admin/products/types/create_type');
    } catch(err) {
      console.log(err);

      return response.redirect('back');
    }
  }

  async store({ view, auth, request, response }) {
    try {
      const post = request.post();
      await Database.raw(`
        INSERT INTO types (title, description) VALUES(
          ${sanitize.escape(post.title)},
          ${sanitize.escape(post.description)}
        )
      `);

      return response.redirect('/admin/products/types');
    } catch(err) {
      console.log(err);

      return response.redirect('back');
    }
  }
}

module.exports = TypeController
