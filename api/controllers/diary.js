const Entry = require("../models/diary")

async function index (req, res) {
    try {
        const entries = await Entry.getAllEntries()
        res.status(200).json(entries)
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}

module.exports = {index }