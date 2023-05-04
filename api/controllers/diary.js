const Entry = require("../models/diary")

async function index (req, res) {
    try {
        const entries = await Entry.getAllEntries()
        res.status(200).json(entries)
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id)
        const entry = await Entry.getById(id)
        res.status(200).json(entry)
    } catch (error) {
        res.status(404).json({"error": error.message})
    }
}

module.exports = {index , show}