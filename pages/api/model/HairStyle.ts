import mongoose,{Schema, Model, Document} from "mongoose";

interface IHairStyle{
    name: string;
    image: string;
    time: string;
    price: number;
}

const hairStyleSchema = new Schema<IHairStyle>({
    name:{type: String, required: true, unique: true},
    image:{type: String, required: true},
    time:{type: String, required: true},
    price:{type: Number, required: true},
})

const HairStyle: Model<IHairStyle> = mongoose.model<IHairStyle>("HairStyle", hairStyleSchema)

export default HairStyle