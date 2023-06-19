import mongoose from 'mongoose';
import { config } from './config';

export default () => {
    const connect = () => {
        mongoose.connect(config.DATABASE_URL)
            .then(() => {
                console.log('Successfully connected to MongoDB.');
            })
            .catch((error) => {
                console.log('An error occured while trying to connect to MongoDB\n' + error);
                return process.exit(1);
            })
    };
    connect();

    mongoose.connection.on('disconnected', connect);
}