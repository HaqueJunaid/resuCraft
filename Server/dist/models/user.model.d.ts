import { Document } from 'mongoose';
interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
    comparePassword(password: string): Promise<boolean>;
    isVerified?: boolean;
    verificationOtp?: string;
}
export declare const userModel: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export {};
//# sourceMappingURL=user.model.d.ts.map