'use strict'

class PageController {
  about({view}) {
    return view.render('pages/about');
  }
}

module.exports = PageController
