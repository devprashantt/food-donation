import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: function () {
                return !this.isGoogleUser;
            }
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;