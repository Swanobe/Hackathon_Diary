const { Router} = require('express')

const diaryController = require('../controllers/diary.js')

diaryRouter = Router()

diaryRouter.get("/", diaryController.index); //get list of diary entries sorted by most recent
diaryRouter.get("/:id", diaryController.show); //get diary entry by id
diaryRouter.post("/", diaryController.create); // create new diary entry from JSON input data
// diaryRouter.patch("/:id", diaryController.update) // update the text of a specific entry
// diaryRouter.delete("/:id", diaryController.destroy) // delete entry by id

//need an endpoit for this..
//Search for a specific diary entry by date/month/year or category


module.exports = diaryRouter;