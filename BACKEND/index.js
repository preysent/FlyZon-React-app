const express = require('express')
const dbConnect = require('./db')
const path = require('path')
const app = express()
const port = 5000

// database connection
dbConnect().catch(err => console.log(err));

//middlewere to send responce in json
app.use(express.json())


//avalible routes == it use theat endpoing to response
app.use('/api/user', require('./routes/auth'));
app.use('/api/product', require('./routes/Product'))




app.get('/', (req, res) => {
    res.send('Hello World!')
})
  

  
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})