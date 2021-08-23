
const passport = require('passport');

// options == {email, password}
const authenticateAdmin = (req, options) => {
  return new Promise((resolve, reject) => {
    const done = (error, admin) => {

      if (error) {
        return reject(new Error(error));
      }

      if (admin) {
        req.login(admin, (error) => {
          if (error) { return reject(new Error(error)); }
          return resolve(admin);
        })
      } else {
        return reject(new Error('Invalid password or email!'));
      }
    }

    const authFn = passport.authenticate('graphql', options, done);
    authFn();
  })
}



exports.buildAuthContext = (req) => {
  const auth = {
    authenticate: (options) => authenticateAdmin(req, options),
    logout: () => req.logout(),
    isAuthenticated: () => req.isAuthenticated(),
    getAdmin: () => req.admin
  }

  return auth;
}
