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


}

module.exports = Entry;