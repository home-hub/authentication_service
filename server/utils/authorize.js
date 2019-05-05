import { verify } from './jwt-module';
import { publicKey } from '../config'
import { UnauthorizedClientError } from './errors';

const attachJwtPayloadToContext = (token) => {
    const options = {
        iss: 'localhost',
        sub: '1',
        aud: 'client',
        exp: '1d'
    }
    try {
        const jwtPayload = verify(token, publicKey, options);
        return {
            user: {
               sub: jwtPayload.sub,
               roles: jwtPayload.roles
            }
        } 
    } catch (err){
        switch (err.name) {
          case "TokenExpiredError":
            return UnauthorizedClientError
    
          case "JsonWebTokenError":
            return UnauthorizedClientError
    
          case "NotBeforeError":
            return UnauthorizedClientError
        
          default:
            break;
        }
    };
}

export default attachJwtPayloadToContext;