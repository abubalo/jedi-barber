import mongoose, { Schema, Model, Document } from "mongoose";

interface IAppointment extends Document{
    userId: mongoose.Schema.Types.ObjectId;
    barberId: mongoose.Schema.Types.ObjectId;
    hairStyleId: mongoose.Schema.Types.ObjectId;
   bookedAt: string
}

const userSchema = new Schema <IAppointment>({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
    barberId:{type: mongoose.Schema.Types.ObjectId, ref: "Barber"},
    hairStyleId:{type: mongoose.Schema.Types.ObjectId, ref: "hairStyles"},
    bookedAt:{type: String, required: true}
})

const Appointment : Model<IAppointment> = mongoose.model<IAppointment>("Appointment", userSchema)

export default Appointment