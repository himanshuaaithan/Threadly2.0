import express from 'express';
import { createProductValidation } from '../validation/Product.validation.js';
import { createProduct, getAllProducts, getProductById, updateProduct, addVariantToProduct, deleteProduct } from '../controllers/Product.controller.js';
import multer from 'multer';


const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 //5mb
    }
})

const ProductRouter = express.Router();

ProductRouter.post('/createProduct', upload.array('image', 5), createProductValidation, createProduct);
ProductRouter.get('/getAllProducts', getAllProducts);
ProductRouter.get('/getProductById/:ProductId', getProductById);
ProductRouter.put('/updateProduct/:ProductId', upload.array('image', 5), createProductValidation, updateProduct);
ProductRouter.patch('/addVariant/:ProductId', createProductValidation, addVariantToProduct);
ProductRouter.delete('/deleteProduct/:ProductId', deleteProduct);
export default ProductRouter;