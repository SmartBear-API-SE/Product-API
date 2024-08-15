import { model, Schema } from "mongoose";

const Manufacturer = new Schema({
    name: {
        type: String
    },
    homePage: {
        type: String
    },
    phone: {
        type: String
    }
});

const maunfacturerModel = model('manufacturerModel', Manufacturer);
export default maunfacturerModel;