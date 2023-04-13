import mongoose, { Schema, Model, Document } from "mongoose";

interface IUser extends Document{
    fullname: string;
    email: string;
    phone: string;
   logs: string[]
}

const userSchema = new Schema <IUser>({
    fullname:{type:  String, required: true},
    email:{type:  String, required: true, unique: true},
    phone:{type:  String, required: true},
    logs:[{type: String, required: true}]
})

const User : Model<IUser> = mongoose.model<IUser>("User", userSchema)

export default User