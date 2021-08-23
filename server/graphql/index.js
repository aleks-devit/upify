
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const {
  userMutations,
  userQueries,
  adminMutations,
  adminQueries,
} = require('./resolvers');
const { portfolioTypes, userTypes, adminTypes, forumTypes } = require('./types');
const { buildAuthContext } = require('./context');

const User = require('./models/User');
const Admin = require('./models/Admin');

exports.createApolloServer = () => {
  // Construct a schema, using GRAPHQL schema language
  const typeDefs = gql(`
  ${userTypes}
  ${adminTypes}

  type Query {
    user: User
    admin: Admin
  }

  type Mutation {
    signUp(input: SignUpInput): String
    signIn(input: SignInInput): User
    signOut: Boolean
    
    signUpAdmin(input: SignUpAdminInput): String
    signInAdmin(input: SignInAdminInput): Admin
    signOutAdmin: Boolean
  }`);

  // The root provides a resolver for each API endpoint
  const resolvers = {
    Query: {
      ...userQueries,
      ...adminQueries,
    },
    Mutation: {
      ...userMutations,
      ...adminMutations,
    }
  }

  const apolloServer = new ApolloServer({
    typeDefs, resolvers,
    context: ({req}) => ({
      ...buildAuthContext(req),
      models: {
        User: new User(mongoose.model('User')),
        Admin: new Admin(mongoose.model('Admin')),
      }
    })
  })

  return apolloServer;
}
