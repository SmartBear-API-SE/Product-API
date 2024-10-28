import { model, Schema } from "mongoose";
import AddressSchema from "./AddressDTO.js";

const Manufacturer = new Schema({
    name: String,
    phone: String, 
    address: {
        type: AddressSchema
    }
});

const maunfacturerModel = model('manufacturerModel', Manufacturer);
export default maunfacturerModel;