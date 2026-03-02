import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: false
    },
    isLoggedIn: {
        type: Boolean,
        required: false
    },
    token: {
        type: String,
        required: null
    },
    otp: {
        type: String,
        required: null
    },
    otpExpiry: {
        type: Date,
        required: null
    }
},{ timestamps: true});


export const User = mongoose.model("User", userSchema);