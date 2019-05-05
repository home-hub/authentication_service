import { sign } from './jwt-module';
import { privateKey } from '../config'

export const generateNewTokenPair = async () => {
    const payload = { roles: ['ADMIN', 'EDITOR'] }
    const accessTokenOptions = {
        iss: "localhost",
        aud: "client",
        exp: "1d",
        sub: "1"
    }
    const refreshTokenOptions = {
        iss: "localhost",
        aud: "client",
        exp: "7d",
        sub: "1"
    }
    
    const newAccessToken = sign(payload, privateKey, accessTokenOptions)
    const newRefreshToken = sign(payload, privateKey, refreshTokenOptions)

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  };