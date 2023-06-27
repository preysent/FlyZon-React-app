const express = require('express')
const user = require('../modals/user')
const router = express.Router();

//incription and hassing the password
const bcrypt = require('bcrypt');

//validation of request
const { body, validationResult } = require('express-validator');

//Json Web Token
const jwt = require('jsonwebtoken');
const Jwt_Str = "Flyzon a web app"

//importing middlewere function to get user id
const getUserId = require('../Middlewere/getUserId')



// Route 1: createing a user 
router.post('/create', [

  body('name').notEmpty().trim(),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  body('address').notEmpty(),
  body('status').notEmpty()

], async (req, res) => {

  const result = validationResult(req);
  // if we get any validation error
  if (!result.isEmpty()) {
    return res.send({ errors: result.array() });
  }

  try {

    //after validation we check is user already exist 
    let getUser = await user.findOne({ email: req.body.email })
    if (getUser) return res.status(500).json({ "msg": "user alredy exist try with another Email" })

    //getting body elements by destructuring
    const { name, email, password, address, status } = req.body

    //generating salt and getting hash of the password
    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(password, salt)


    //creating user
    const User = await user.create({
      name,
      email,
      password: hash,
      address,
      status
    })


    //creating data for generating jwt
    const data = {
      user: {
        id: User._id,
        status:User.status
      }
    }

    //creating json web token
    var token = await jwt.sign(data, Jwt_Str);

    //sending authentication token
    res.json(token)


  } catch (err) {
    res.send({ err })
  }
})






// Route 2: login the user 
router.post('/login', [

  body('email').isEmail(),
  body('password').isLength({ min: 5 }),

], async (req, res) => {

  const result = validationResult(req);
  // if we get any validation error
  if (!result.isEmpty()) {
    return res.send({ errors: result.array() });
  }

  try {

    //getting body elements by destructuring
    const { email, password } = req.body


    //after validation we check is user already exist 
    let getUser = await user.findOne({ email: email })
    if (!getUser) return res.status(500).json({ "msg": "User not exist" })


    //compaire the given password and user's password
    let conform = await bcrypt.compare(password, getUser.password)
    if(!conform){
      res.json({msg:"Invalid value"})
    }


    //creating data for generating jwt
    const data = {
      user: {
        id: getUser._id,
        status:getUser.status
      }
    }

    //creating json web token
    var token = await jwt.sign(data, Jwt_Str);

    //sending authentication token
    res.json(token)


  } catch (err) {
    res.send({ err })
  }
})





// Route 3: get logged in user detail's 
router.post('/getUser', getUserId, async (req, res) => {

  try {

  // it select all imformation of user other then password
  let getUser = await user.findOne({_id:req.user.id}).select('-password')
  res.json({getUser})

  } catch (err) {
    res.send({ err })
  }
})

module.exports = router;