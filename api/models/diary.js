const db = require("../database/connect")

class Entry {

    constructor({diary_id, user_name, pit, peak, entry_date }){
        this.id = diary_id;
        this.user_name = user_name;
        this.pit = pit;
        this.peak = peak;
        this.entry_date = entry_date;
    }

    static async getAllEntries() {
        const response = await db.query("SELECT * FROM diary ORDER BY entry_date DESC;") //check if asc or desc
        if (response.rows.length === 0) {
            throw new Error("No snacks available.")
        }
        return response.rows.map(entry => new Entry(entry))
    }

    static async getById(id) {
        const response = await db.query("SELECT * FROM diary WHERE diary_id= $1;", [id])
        if (response.rows.length != 1)
        {
            throw new Error("Unable to locate diary entry")
        }
        return new Entry(response.rows[0])
    }

    static async create(data) {
        const {user_name, pit, peak } = data;
        const response = await db.query("INSERT INTO diary (user_name, pit, peak) VALUES ($1, $2, $3) RETURNING *;", [user_name, pit, peak])
        const entryId = response.rows[0].diary_id;
        const newEntry = await Entry.getById(entryId)
        return newEntry;
        
    }

    async update(data) {
        const {user_name, pit, peak, entry_date} = data
        const response = await db.query("UPDATE diary SET (user_name, pit, peak, entry_date) = ($1, $2, $3, $4) WHERE diary_id = $5 RETURNING *;", [ user_name, pit, peak,entry_date, this.id ]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update votes.")
        }
        return new Entry(response.rows[0]);
    }

}

module.exports = Entry;
