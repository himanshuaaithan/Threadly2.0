import { body, param, query, validationResult } from 'express-validator'

async function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}


export const createProductValidation = [
    body('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
    body('description').isString().withMessage('Description must be a string').notEmpty().withMessage('Description is required'),
    body('category').isString().withMessage('Category must be a string').notEmpty().withMessage('Category is required'),
    body('price.*.amount').notEmpty().withMessage('Price amount is required'),
    body('price.*.currency').isString().withMessage('Price currency must be a string').notEmpty().withMessage('Price currency is required'),
    body('variants.*.color').isString().withMessage('Variant color must be a string').notEmpty().withMessage('Variant color is required'),
    body('variants.*.size').isString().withMessage('Variant size must be a string').notEmpty().withMessage('Variant size is required').isIn(["XS", "S", "M", "L", "XL", "XXL"]).withMessage('Variant size must be one of XS, S, M, L, XL, XXL'),
    body('variants.*.stock').isNumeric().withMessage('Variant stock must be a number'),

    validateRequest
]

