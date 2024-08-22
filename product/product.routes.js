import express from 'express';
const productRouter = express.Router();
import * as productController from '../product/product.controller.js'

productRouter.get("/product/:id", productController.getProductById, () => {
    // #swagger.tags = ["Products"]
    // #swagger.description = "Retieve products by ID"
});


productRouter.get("/product", productController.getAllProducts, () => {
    /* 
        #swagger.autoQuery = false
        #swagger.tags = ["Products"]
        #swagger.description = "Retrieve All products"
        #swagger.parameters['limit'] = {
            in:'query',
            descritpion: 'Limit the number of products that will be displayed!!!!!!',
            required: false,
            type: 'number'
        } 
        #swagger.parameters['skip'] = {
            in:'query',
            descritpion: 'Skip the number of products displayed',
            required: false,
            type: 'number'
        }
        #swagger.parameter['searchString'] = {
            in: 'query',
            description: 'Search',
            required: false,
            type: 'number
        }
    */
});

productRouter.post('/product', productController.createProduct);
productRouter.put('/product/:id', productController.updateProduct);
productRouter.delete('/product/:id', productController.deleteProduct);

export default productRouter