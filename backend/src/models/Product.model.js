import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
        enum: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    stock: {
        type: Number,
        required: true
    }


}, { _id: true });


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: [
        {
            amount: {
                type: Number,
                required: true
            },
            currency: {
                type: String,
                default: 'INR',
                enum: ['INR', 'USD', 'EUR', 'GBP']
            }
        }
    ],
    images: [{
        type: String,
        required: true
    }],
    variants: [variantSchema],
    isactive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })


const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
