const express = require('express')
const product = require('../modals/product')
const router = express.Router();

//importing middlewere function to get user id
const getUserId = require('../Middlewere/getUserId')

//validation of request
const { body, validationResult } = require('express-validator');



// Route 1: adding new product to the list
router.post('/add', getUserId, [

    body('name').isLength({ min: 5 }),
    body('description').notEmpty(),
    body('price').notEmpty(),
    body('brand').notEmpty(),
    body('category').notEmpty(),
    body('stock').notEmpty(),
    body('images').notEmpty(),


], async (req, res) => {
    try {
        const errors = validationResult(req);
        // if we get any validation error
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.array() });

        }


        // //Checking if it user then return invalid
        // if (req.user.seller) {
        //     return res.json({ msg: "invalid user" })
        // }



        const { name, description, price, brand, category, stock, images } = req.body
        const sellerId = req.user.id

        const newProduct = await product.create({
            name,
            sellerId,
            description,
            price,
            brand,
            category,
            stock,
            images
        })

        // res.json({ msg: "product created" })
        return res.json(newProduct)

    } catch (err) {
        res.send({ msg: "some error accour" })
    }
})




// Route 2: updating the existing product
router.put('/update/:id', getUserId, async (req, res) => {

    try {
        // //Checking if it user then return invalid 
        // if (req.user.seller) {
        //     return res.json({ msg: "invalid user" })
        // }


        // getting the product from db
        let productToUpdate = await product.findById(req.params.id)
        if (!productToUpdate) return res.json({ msg: "product not found" })


        // checking the user is same
        if (!productToUpdate.sellerId === req.user.id) {
            return res.json({ msg: "user dose not match" })
        }


        //getting value for updation
        const { name, description, price, brand, category, stock, images  } = req.body

        const ProductFilds = {}
        if (name) ProductFilds.productTitle = productTitle
        if (description) ProductFilds.description = description
        if (price) ProductFilds.price = price
        if (brand) ProductFilds.brand = brand
        if (category) ProductFilds.category = category
        if (stock) ProductFilds.stock = stock
        if (images) ProductFilds.images

        const newProduct = await product.findByIdAndUpdate(req.params.id, { $set: ProductFilds }, { new: true })

        res.json(newProduct)

    } catch (err) {
        res.send({ err })
    }
})





// Route 3: deleting the existing product
router.delete('/delete/:id', getUserId, async (req, res) => {

    // //Checking if it user then return invalid 
    // if (req.user.seller) {
    //     return res.json({ msg: "invalid user" })
    // }


    try {
        // getting the product from db
        let productToUpdate = await product.findById(req.params.id)
        if (!productToUpdate) return res.json({ msg: "product not found" })


        // checking the user is same
        if (!productToUpdate.sellerId === req.user.id) {
            return res.json({ msg: "user dose not match" })
        }



        const newProduct = await product.findByIdAndDelete(req.params.id);

        res.json(newProduct)

    } catch (err) {
        res.send({ err })
    }
})




// Route 4: get product by category
router.get('/fetch/:category', async (req, res) => {
    try {
        // getting the product from db
        let products = await product.find({ category: req.params.category })

        if (!products || products.length == 0)
            return res.json({ msg: "product not found" })

        res.json(products)

    } catch (err) {
        res.send({ err })
    }
})


// Route 5: get one single product
router.get('/:id', async (req, res) => {

    try{
        // getting the product details
        const Product = await product.findById({_id:req.params.id})
        
        res.json(Product)

    } catch (err) {
        res.send({ err })
    }

})

module.exports = router