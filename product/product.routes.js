const router = require('express').Router();
const controller = require('./product.controller');

router.get("/product/:id", controller.getById, () => {
    // #swagger.tags = ["Products"]
});

router.get("/products", controller.getAll, () => {
    // #swagger.tags = ["Products"]
});

module.exports = router;