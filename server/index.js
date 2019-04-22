import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import attachJwtPayloadToContext from './utils/authorize'

const HEADER_NAME = 'authorization'

const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: ({ req }) => attachJwtPayloadToContext(req.headers[HEADER_NAME])
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
