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

async function create(req, res) {
    try {
        const data = req.body
        const entry = await Entry.create(data)
        res.json(entry)
    } catch (error) {
        res.status(404).json({"error": error.message})
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id)
        const entry = await Entry.getById(id)
        const data = req.body;
        const result = await entry.update(data);
        res.status(200).json(result);
    } catch (error) {
       res.status(404).json({"error": error.message}) 
    }
}

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.getById(id);
        const result = await entry.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};



module.exports = {index , show, create, update, destroy}
