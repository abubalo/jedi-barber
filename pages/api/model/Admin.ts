import mongoose, { Schema, Model, Document } from "mongoose";

interface IAdmin extends Document{
    fullname: string;
    email: string;
    phone: string;
   logs: string[]
}

const adminSchema = new Schema <IAdmin>({
    fullname:{type:  String, required: true},
    email:{type:  String, required: true, unique: true},
    phone:{type:  String, required: true},
    logs:[{type: String, required: true}]
})

const Admin : Model<IAdmin> = mongoose.model<IAdmin>("Admin", adminSchema)

export default Admin