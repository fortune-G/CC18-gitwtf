const server = require('express')
const app = express() 
require('dotenv').config() 


app.use('/auth',authRoute)

const port = process.env.PORT || 8004 


app.listen(port,()=>console.log("GOGO",port))