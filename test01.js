const server = require('express')
const app = express() 
require('dotenv').config() 



const port = process.env.PORT || 8002 


app.listen(port,()=>console.log("GOGO",port))