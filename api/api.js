const express = require('express');
const cors = require('cors');

//const snackRouter = require('./routers/snack');
const logRoutes = require('./middleware/logger')

const diaryRouter = require('./routers/diary')

const api = express();

api.use(cors());
api.use(express.json());
api.use(logRoutes)

api.get("/", (req, res) => {
    res.json({
        title: "Retro diary",
        description: "Manage your retro diary entries"
    })
})

api.use('/entries', diaryRouter)
//api.use('/snacks', snackRouter)

module.exports = api;