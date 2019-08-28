import {  UnauthorizedClientError } from './errors';

export const isAuthorized = next => (root, args, context, info) => {
    console.log(context.user)
    if (!context.user) {
        return UnauthorizedClientError;
    }
    return next(root, args, context, info);
};