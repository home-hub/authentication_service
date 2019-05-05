import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import config from './mongo/config'
import database from './mongo/database';
import { typeDefs, resolvers } from './graphql/schema';
import attachJwtPayloadToContext from './utils/authorize';

dotenv.config()

// Create a connection to the MongoDB
database.connect(config.dbHost, config.dbName, config.dbPort);

const HEADER_NAME = 'authorization'

const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: ({ req }) => ({
    ...attachJwtPayloadToContext(ACCESS_TOKEN_SECRET, req.headers[HEADER_NAME]),
    ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET ,
    REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
