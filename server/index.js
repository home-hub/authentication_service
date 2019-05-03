import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { typeDefs, resolvers } from './graphql/schema';
import attachJwtPayloadToContext from './utils/authorize';

dotenv.config()

const HEADER_NAME = 'authorization'

const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: ({ req }) => ({
    ...attachJwtPayloadToContext(req.headers[HEADER_NAME])
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
