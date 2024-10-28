import { Schema, model} from 'mongoose';

const ProductSchema = new Schema({
    type: String,
    name: String,
    version: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const productModel = model('productModel', ProductSchema);
export default productModel;