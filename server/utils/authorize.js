
import jwt from 'jsonwebtoken';

const attachJwtPayloadToContext = (token) => {
    try {
        const jwtPayload = jwt.verify(
            token,
            "qwertyuiopasdfghjklzxcvbnm123456",
        );
    
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