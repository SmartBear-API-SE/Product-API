import express from 'express';
import cors from 'cors';
import productRouter from './product/product.routes.js';
import manufacturerRouter from './manufactuer/manufactor.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.json' assert {type: 'json'}
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5001;

// Connect to MongoDB
mongoose.connect(process.env.MONGOURL)
    .then(db => console.log(`Connected to Mongo - ${db.connections[0].name}`))
    .catch(err => console.error("Cannot connect to database", err));


    app.use(cors());
    app.use(express.json())
    app.use(productRouter);
    app.use(manufacturerRouter)
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.listen(port, () => console.log(`Provider API listening on port ${port}...`));