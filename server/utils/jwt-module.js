import fs from 'fs';
import jwt from 'jsonwebtoken';
import {UnauthorizedClientError} from './errors'

const privateKey = fs.readFileSync('./private.key', 'utf8')
const publicKey = fs.readFileSync('./public.key', 'utf8')

export const sign = (payload, options) => {
  const signOptions = {
    issuer: options.iss,
    subject: options.sub,
    audience: options.aud,
    expiresIn: options.exp,
    algorithm: "RS256"
  }  
   
  return jwt.sign(payload, privateKey, signOptions)
}

export const verify = (token, options) => {
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

