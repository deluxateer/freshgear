'use strict'

class AuthController {
  async login({ response, request, view }) {
    return view.render('account/login');
  }
  
  async register({ response, request, view }) {
    return view.render('account/register');
  }
  
  async handleLogin({ response, request, view }) {
    return view.render('account/register');
  }
  
  async handleRegister({ response, request, view }) {
    return view.render('account/register');
  }

}

module.exports = AuthController
