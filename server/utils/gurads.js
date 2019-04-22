import { UnauthorizedError, ForbiddenClientError, UnauthorizedClientError } from './errors';

export const isAuthorized = next => (root, args, context, info) => {
    if (!context.user) {
        return UnauthorizedClientError;
    }
    return next(root, args, context, info);
};