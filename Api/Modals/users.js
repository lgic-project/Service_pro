import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    Name: {
        type: String, required: true
    },
    Email: {
        type: String, required: true, unique: true
    },
    Password: {
        type: String, required: true
    },
    PhoneNo: {
        type: Number, required: true
    },
    Address: {
        type: String, required: true
    },
    Role: {
        type: String,
        enum: ['user', 'provider', 'admin'],
        default: 'user'
    },
    Image: [{
        type: String
    }],
    Active: {
        type: Number, default: 1
    },
    Services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }],
}, { timestamps: true }
)
export const User = mongoose.model('User', userSchema)