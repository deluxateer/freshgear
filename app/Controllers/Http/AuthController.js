'use strict'

const { validate, sanitize } = use('Validator');
const Hash = use('Hash');
const User = use('App/Models/User');

class AuthController {
  async register({ response, request, view }) {
    return view.render('account/register');
  }
  
  async storeUser({ response, request, view }) {
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

        return response.redirect('/');
      }
    } else {
      return 'Passwords do not match.';
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
