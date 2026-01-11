import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationOtp: {
        type: String,
        default: null,
        expires: 3600
    }
});
userSchema.pre('save', function () {
    if (!this.isModified('password'))
        return;
    this.password = bcrypt.hashSync(this.password, 10);
});
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
export const userModel = model("User", userSchema);
//# sourceMappingURL=user.model.js.map