const {ApolloServer, gql} = require('apollo-server');
import jwt from 'jsonwebtoken';
import { compareSync, hashSync } from 'bcrypt';

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
     signup(username: String!, password: String!): AuthToken
      login(username: String!, password: String!): AuthToken
  }
`;

const users = [
  {
    id: 0,
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin@admin.com'
  },
  {
    id: 1,
    name: 'Vasia',
    email: 'vasia@vasia.com',
    password: 'vasia@vasia.com'
  },
  {
    id: 2,
    name: 'Jim',
    email: 'jim@jim.com',
    password: 'jim@jim.com'
  }
]

const resolvers = {
  Query: {
    users: () => users
  },
  Mutation: {
    signup: (obj, args, context, info) => {
      args.password = hashSync(args.password, 10);
      const session = context.driver.session();

      return session
        .run(
          `CREATE (u:User) SET u += $args, u.id = randomUUID()
           RETURN u`,
          { args }
        )
        .then((res) => {
          session.close();
          const { id, username } = res.records[0].get('u').properties;

          return {
            token: jwt.sign({ id, username }, process.env.JWT_SECRET, {
              expiredIn: '30d'
            })
          };
        });
    },
    login: (obj, args, context, info) => {
      const session = context.driver.session();

      return session
        .run(
          `MATCH (u:User {username: $username}))
        RETURN u LIMIT 1`,
          {username: args.username}
        )
        .then((res) => {
          session.close();

          const {id, username, password} = res.records[0].get('u').properties;
          if (!compareSync(args.password, password)) {
            throw new Error('Authorization Error');
          }

          return {
            token: jwt.sign({id, username}, process.env.JWT_SECRET, {
              expiresIn: '30d'
            })
          };
        });
    }
  }
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});