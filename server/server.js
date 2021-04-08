
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors())

dotenv.config()

mongoose.connect(process.env.DB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('connected to DB'))

const userRoute = require('./routes/UserRoutes')
const productRoute = require('./routes/productRoutes')
const orderRoute = require('./routes/OrderRoutes')

app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/order', orderRoute)

app.listen(8080, () => {
    console.log("Server is running on port 8080")  
})