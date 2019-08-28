import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const privateKey = fs.readFileSync('./private.key', 'utf8')
const publicKey = fs.readFileSync('./public.key', 'utf8')

export default {
    port: Number(process.env.PORT),
    corsOrigin: process.env.CORS_ORIGIN,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: Number(process.env.DB_PORT),
    accessTokenExpireTime: process.env.ACCESS_TOKEN_EXPIRE_TIME,
    refreshTokenExpireTime: process.env.REFRESH_TOKEN_EXPIRE_TIME,
    publicKey,
    privateKey,
};