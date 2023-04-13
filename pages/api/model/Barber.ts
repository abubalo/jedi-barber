import mongoose,{Schema, Model, Document} from "mongoose";

interface IBarber{
    name: string;
    image: string;
    availbale: boolean;
}

const barberSchema = new Schema<IBarber>({
    name: {type: String, requied: true},
    image: {type: String, requied: true},
    availbale: {type: Boolean, requied: true},
})

const Barber: Model<IBarber> = mongoose.model<IBarber>("Barber", barberSchema)

export default Barber