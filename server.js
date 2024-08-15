import express from 'express';
import cors from 'cors';
import router from './product/product.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.json' assert {type: 'json'}
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGOURL)
    .then(db => console.log(`Connected to Mongo - ${db.connections[0].name}`))
    .catch(err => console.error("Cannot connect to database", err));

const init = () => {
    app.use(cors);
    app.use(router);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    return app.listen(port, () => console.log(`Provider API listening on port ${port}...`));
};

init();