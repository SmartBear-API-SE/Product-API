import { Schema, model} from 'mongoose';

const ProductSchema = new Schema({
    type: String,
    name: String,
    version: String,
    createdAt: Date
});

const productModel = model('productModel', ProductSchema);
export default productModel;