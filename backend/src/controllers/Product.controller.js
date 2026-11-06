import ProductModel from '../models/Product.model.js';
import ImageKit from '@imagekit/nodejs';
import config from '../config/config.js';
import { sendImage } from '../services/Image.service.js';




export const createProduct = async (req, res) => {

    const { name, description, category, amount, currency, size,stock } = req.body;

    const images = await Promise.all(req.files.map(async (file) => {
        return await sendImage({
            buffer: file.buffer,
            fileName: file.originalname
        })
    }))

    const product = await ProductModel.create({
        name,
        description,
        category,
        price:[{
            amount,
            currency
        }],
        variants:[
            {
                size,
                stock
            }
        ],
        images
    });

    res.status(201).json({
        message: 'Product created successfully',
        product: product
    });
}

export const getAllProducts = async (req,res)=>{
    const products = await ProductModel.find();

    res.status(200).json({
        message: 'products fetched successfully',
        products: products
    })
}

export const getProductById = async (req,res)=>{
    const { ProductId } = req.params;

    const product = await ProductModel.findById(ProductId);

    res.status(200).json({
        message: 'Product fetched successfully',
        product: product
    });
}

export const updateProduct = async (req,res)=>{
    const { ProductId } = req.params;

    const { name, description, category, amount, currency, size,stock } = req.body;

    const product = await ProductModel.findByIdAndUpdate(ProductId, {
        name,
        description,
        category,
        price:[{
            amount,
            currency
        }],
        variants:[
            {
                size,
                stock
            }
        ]
    }, { new: true });

    res.status(200).json({
        message: 'Product updated successfully',
        product: product
    });
}

export const addVariantToProduct = async (req,res)=>{
    const { ProductId } = req.params;

    const { size, stock } = req.body;

    const product = await ProductModel.findById(ProductId);

    product.variants.push({
        size,
        stock
    });

    await product.save();

    res.status(200).json({
        message: 'Variant added successfully',
        product: product
    });
}

export const deleteProduct = async (req,res)=>{
    const { ProductId } = req.params;

    await ProductModel.findByIdAndDelete(ProductId);

    res.status(200).json({
        message: 'Product deleted successfully'
    })
}
  