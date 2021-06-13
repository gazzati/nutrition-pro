const config = require('../config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
//Import Routes
const authRoute = require('./routes/auth')
const vacancyRoute = require('./routes/vacancy')


//Connect to DB
mongoose.connect(
    config.MONGO_DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true},
    () => console.log('Connected to db!')
)

//Middleware
app.use(express.json())
app.use(cors({origin: true, credentials: true}))

//Route Middlewares
app.use('/auth', authRoute)
app.use('/vacancy', vacancyRoute)

app.listen(config.SERVER_PORT, () => console.log('Server Up and running'))
