'use strict'

const { validate, sanitize } = use('Validator');
const Hash = use('Hash');
const User = use('App/Models/User');

class AuthController {
  async register({ response, request, view }) {
    return view.render('account/register');
  }
  
  async storeUser({ response, request, view, session }) {
    // validation of input fields
    const validation = await validate(request.all(), {
      email: 'required|email|unique:users,email',
      password: 'required|min:6|max:40',
      confirm_password: 'required',
    });

    // check if passwords are the same
    if(request.input('password') === request.input('confirm_password')) {
      // check if validations of other fields fail else save user
      if(validation.fails()) {
        session.withErrors(validation.messages()).flashExcept(['password', 'confirm_password']);

        response.redirect('back');
      } else {
        // try to save user to db
        try {
          let newUser = await User.create({
            email: request.input('email'),
            password: request.input('password')
          });
        } catch(err) {
          return err;
        }

        session.flash({ notification: 'Welcome to Fresh Gear!' });
        return response.redirect('/');
      }
    } else {
      session.withErrors([
        {
          field: 'password',
          message: 'Need to confirm password',
        },
        {
          field: 'confirm_password',
          message: 'Need to confirm password',
        },
      ]).flashExcept(['password', 'confirm_password']);

      return response.redirect('back');
    }
  }

  async login({ response, request, view }) {
    return view.render('account/login');
  }

  async handleLogin({ response, request, view }) {
    return view.render('account/register');
  }
}

module.exports = AuthController
