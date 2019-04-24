
import jwt from 'jsonwebtoken';

const attachJwtPayloadToContext = (secret, token) => {
    try {
        const jwtPayload = jwt.verify(token, secret);
        return {
            user: {
               sub: jwtPayload.sub,
               roles: jwtPayload.roles
            }
        }
        
    } catch (error) {
        return { 
            user: null 
        }
    }; 
};

export default attachJwtPayloadToContext;