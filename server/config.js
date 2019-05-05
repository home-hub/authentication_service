import dotenv from 'dotenv';

dotenv.config();

export default {
    port: Number(process.env.PORT),
    corsOrigin: process.env.CORS_ORIGIN,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: Number(process.env.DB_PORT) || 27017,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpireTime: process.env.JWT_EXPIRE_TIME
};