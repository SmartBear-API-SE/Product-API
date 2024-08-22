import maunfacturerModel from "../DTOs/manufacturerDTO.js";


// Add new manufacturer
export async function addManufacturer(req, res) {
    const data = req.body;
    console.log(data)
    try {
        const manufacturer = new maunfacturerModel(data);
        const savedManufacturer = manufacturer.save();
        return res.status(201).json(savedManufacturer);
    } catch (error) {
        res.status(500).json({error: "An error occurred while creating the product"})
    }
}
// Get All manufacturers
export async function getAll(req, res) {
    try {
        const manufacturer = await maunfacturerModel.find({})
        return res.status(200).json(manufacturer);
    } catch (error) {
        res.status(500).json({error: 'An error occurred while fetching manufacturers'})
    }
}
// Get Manufacturer by ID
export async function getManufacturerById(req, res) {
    const ID = req.params.id;
    try {
        const manufacturer = await maunfacturerModel.findById(ID);
        if(!manufacturer) {
            res.status(404).json({error: 'Manufacturer Not Found'})
        }
        res.json(manufacturer)
    } catch (error) {
        res.status(500).json({error: `An error occured fetching the manufacturer`})
    }
}

// *** FIXME: Finish update by ID
// Update Manufacturer by ID
// export async function updateManufacturerById(req, res) {
//     const ID = req.params.id;
//     try {
    
//     } catch (error) {
        
//     }
// }
// Delete manufacturer by ID
export async function deleteById(req, res) {
    const ID = req.params.id;
    try {
        const manufacturer = maunfacturerModel.findByIdAndDelete(ID);
        if(!manufacturer) {
            return res.status(404).json({error: 'Manufacturer Not Found'})
        }
        res.json(manufacturer);
    } catch (error) {
        res.status(500).json({error: 'An error occurred while deleting'})
    }
}