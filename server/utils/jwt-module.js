import jwt from 'jsonwebtoken';

export const sign = (payload, privateKey, options) => {
  const signOptions = {
    issuer: options.iss,
    subject: options.sub,
    audience: options.aud,
    expiresIn: options.exp,
    algorithm: "RS256"
  }  
   
  return jwt.sign(payload, privateKey, signOptions)
}

export const verify = (token, publicKey, options) => {
  const verifyOptions = {
    issuer: options.iss,
    subject: options.sub,
    audience: options.aud,
    expiresIn: options.exp,
    algorithm: ["RS256"]
  }
  return jwt.verify(token, publicKey, verifyOptions);
}

export const decode = (token) => {
  return jwt.decode(token, {complete: true})
}

