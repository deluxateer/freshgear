'use strict'

class TypeController {
  index({ view, auth }) {
		return view.render('admin/products/types/all_types');
	}
}

module.exports = TypeController
