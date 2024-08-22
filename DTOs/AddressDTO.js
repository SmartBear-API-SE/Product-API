import { Schema } from "mongoose";

const AddressSchema = new Schema({
    country: String,
    street: String,
    city: String,
    state: String,
    zip: String
})

export default AddressSchema