const express = require('express')
const Order = require('../modals/order') //order monal
const Product = require('../modals/product')
const router = express.Router()

// middlewere function to verify user
const getUserId = require('../Middlewere/getUserId')

// importing express-validoter to validate request data
const { body, validationResult } = require('express-validator');






// Route 1: Order placing 
router.post('/', getUserId, [

    body('products').isArray({ min: 1 }),
    body('products.*.productId').notEmpty(), // importent  syntex
    body('products.*.quantity').isInt({ min: 1 }),
    body('totalAmount').notEmpty(),
    body('shippingAddress.street').notEmpty(),
    body('shippingAddress.city').notEmpty(),
    body('shippingAddress.state').notEmpty(),
    body('shippingAddress.country').notEmpty(),
    body('shippingAddress.zipCode').notEmpty(),

], async (req, res) => {

    try {
        // validation is there any validation error
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // destucturing the data form body
        const { products, totalAmount, shippingAddress } = req.body
        const userId = req.user.id

        // getting ID's of all product 
        const productIds = products.map(product => product.productId)

        // finding the product in dataBase 
        //******* $in allows to query multiple values in a single query
        const fetchedProducts = await Product.find({ _id: { $in: productIds } }).select('price');



            //by using price calculating totoal amount by db info
            const prizeList = (products.map((product, index) => product.quantity * fetchedProducts[index].price ))

            const totalAmountDB = prizeList.reduce((total, amount) => total + parseInt(amount), 0);

            // Comparing my calculated amount with request amount
            if (totalAmount != totalAmountDB) {
                return res.status(400).json({ error: 'Failed to create order' })
            }

    
        //creating new order 
        const newOrder = await Order.create({
            userId, products, totalAmount, shippingAddress
        })

        res.json(newOrder)

    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
})

module.exports = router;