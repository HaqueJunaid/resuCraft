import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
    comparePassword(password: string): Promise<boolean>;
    isVerified?: boolean;
    verificationOtp?: string;
}

const userSchema = new Schema<IUser>({
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
})

userSchema.pre('save', function(this: IUser) {
   if (!this.isModified('password')) return;
   this.password = bcrypt.hashSync(this.password, 10);
})

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export const userModel = model<IUser>("User", userSchema);