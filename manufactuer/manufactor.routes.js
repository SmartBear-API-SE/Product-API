import express from 'express';
import * as manufacturerController from '../manufactuer/manufactor.controller.js'

const manufacturerRouter = express.Router();

// ADD CRUD controllers 
manufacturerRouter.get('/manufacturer', manufacturerController.getAll);
manufacturerRouter.post('/manufacturer', manufacturerController.addManufacturer);
manufacturerRouter.get('/manufacturer/:id', manufacturerController.getManufacturerById);


export default manufacturerRouter