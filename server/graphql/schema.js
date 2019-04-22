// ./graphql/typeDefs.js
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

export const typeDefs = mergeTypes(
    fileLoader(
        path.join(__dirname, './types')
    ));

export const resolvers = mergeResolvers(
    fileLoader(
        path.join(__dirname, './resolvers')
    ));
