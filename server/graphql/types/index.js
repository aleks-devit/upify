
exports.userTypes = `
  type User {
    _id: ID,
    email: String
    firstname: String
    lastname: String
    password: String
    role: String
  }

  input SignUpInput {
    lastname: String!
    firstname: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`

exports.adminTypes = `
  type Admin {
    _id: ID,
    email: String
    firstname: String
    lastname: String
    password: String
    role: String
  }

  input SignUpAdminInput {
    lastname: String!
    firstname: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }

  input SignInAdminInput {
    email: String!
    password: String!
  }
`

