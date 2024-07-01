const router = require('express').Router();
const controller = require('./product.controller');

router.get("/product/:id", controller.getById, () => {
    // #swagger.tags = ["Products"]
    // #swagger.description = "Retieve products by ID"
});

router.get("/products", controller.getAll, () => {
    // #swagger.tags = ["Products"]
    // #swagger.description = "Retrieve All products"
});

module.exports = router;