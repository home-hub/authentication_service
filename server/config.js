import dotenv from 'dotenv';

dotenv.config();
const jwtPrivateKey = fs.readFileSync('./private.key', 'utf8')
const jwtPublicKey = fs.readFileSync('./public.key', 'utf8')

export default {
    port: Number(process.env.PORT),
    corsOrigin: process.env.CORS_ORIGIN,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: Number(process.env.DB_PORT) || 27017,
    publicKey,
    privateKey,
    jwtExpireTime: process.env.JWT_EXPIRE_TIME
};