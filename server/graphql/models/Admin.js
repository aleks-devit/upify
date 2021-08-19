
const BaseModel = require('./BaseModel');

class Admin extends BaseModel {

  getAuthAdmin(ctx) {
    if (ctx.isAuthenticated()) {
      return ctx.getAdmin();
    }

    return null;
  }

  async signUpAdmin(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error('Password must be the same as confirmation password!');
    }
    try {
      console.log(this.Model)
      return await this.Model.create(signUpData);
    } catch(e) {
      if (e.code && e.code === 11000) {
        throw new Error('Admin with provided email already exists!');
      }

      throw e;
    }
  }

  async signInAdmin(signInData, ctx) {
    try {
      const admin = await ctx.authenticate(signInData);
      return admin;
    } catch(error) {
      return error;
    }
  }

  signOutAdmin(ctx) {
    try {
      ctx.logout();
      return true;
    } catch(e) {
      return false;
    }
  }
}

module.exports = Admin;
