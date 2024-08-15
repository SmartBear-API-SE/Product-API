import productModel from "../DTOs/productDTO.js";

// Create new product 
export async function createProduct (req, res) {
    const { type, name , version} = req.body

    try {
        const product = new productModel({type, name, version});
        const savedProduct = product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({error: "An error occurred while creating the product"})
    }
};

// Get all products
export async function getAllProducts (req, res) {
    try {
      const product = await productModel.find();
      res.json(product);
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
    const { type, name, version } = req.body;
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(
      productId,{ type, name, version },{ new: true });
      if (!updatedProduct) {
          return res.status(404).json({ error: 'Product not found' });
      }
      res.json(updatedSong);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the product' });
    }
   };
   
   // Delete a product by ID
   export async function deleteProduct (req, res) {
    const productId = req.params.id;
    try {
      const deletedProduct = await productModel.findByIdAndRemove(productId);
      if (!deletedProduct) {
    return res.status(404).json({ error: 'Product not found' });
    }
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the product' });
    }
   };



