import mongoose from 'mongoose';
import fs from 'fs'

const connect = (dbHost, dbName, dbPort) => {
    const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;
    const options = {
        useNewUrlParser: true,
        useCreateIndex: true
    };

    mongoose
        .connect(url, options)
        .then(() => console.info(`Successfully connected to database ${dbHost}:${dbPort}/${dbName}`))
        .catch(error => {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });

    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

const models = {}
const path = `${__dirname}/models`
    
fs.readdirSync(path).filter(file => {
    return  (file.indexOf('.') !== 0) && 
            (file.slice(-3) === '.js')
}).forEach(file => {
    const modelName = file.slice(0, -3)
    return models[modelName] = require(path + '/' + file)
})


export default { connect, models };