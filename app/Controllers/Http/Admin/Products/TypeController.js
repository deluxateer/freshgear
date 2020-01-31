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
}

module.exports = TypeController
