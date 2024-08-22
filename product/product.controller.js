import productModel from "../DTOs/productDTO.js";

    // Create new product 
    export async function createProduct (req, res) {
        console.log(req.body)
        const data = {
          type: req.body.type,
          name: req.body.name,
          version: req.body.version,
          createdAt: req.body.createdAt
        }
        if (!data) {
          return res.status(400).json({ error: "Missing required fields: type, name, or version" });
        }

        try {
            const product = new productModel(data);
            const savedProduct = await product.save();
            return res.status(201).json(savedProduct);
        } catch (error) {
            res.status(500).json({error: "An error occurred while creating the product"})
        }
    };

    // Get all products
    export async function getAllProducts (req, res) {
        try {
          const product = await productModel.find({})
          return res.json(product)
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching products' });
        }
    };
   
   // Get a specific product by ID
   export async function getProductById (req, res) {
    const productId = req.params.id;
    try {
      const product = await productModel.findById(productId);
        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
          }
          res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the product' });
    }
   };
   
   // Update a product by ID
   export async function updateProduct (req, res) {
    const productId = req.params.id;
    console.log(productId)
    const { type, name, version } = req.body;
    console.log(req.body)
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(
      productId,{ type, name, version },{ new: true });
      if (!updatedProduct) {
          return res.status(404).json({ error: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the product' });
    }
   };
   
   // Delete a product by ID
   export async function deleteProduct (req, res) {
    const productId = req.params.id;
    try {
      const deletedProduct = await productModel.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the product' });
    }
   };



