import {Schema} from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
}, { timestamps: true })


const User = model('User', userSchema);

export default User;