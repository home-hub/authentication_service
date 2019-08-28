import { sign } from './jwt-module';
import config from '../config';

export const generateAccessToken = async (user) => {
  const payload = {
    name: "accessToken",
    roles: ['ADMIN', 'EDITOR']
  }

  const accessTokenOptions = { 
      iss: "localhost",
      aud: "client",
      exp: "1d",
      sub: user.id
  }
  
  return sign(payload, config.privateKey, accessTokenOptions)

};

export const generateRefreshToken = async (user) => {
    const payload = {name: "refreshToken"}
    const refreshTokenOptions = {
        iss: "localhost",
        aud: "client",
        exp: "7d",
        sub: user.id
    }
  
    return sign(payload, config.privateKey, refreshTokenOptions)
  };