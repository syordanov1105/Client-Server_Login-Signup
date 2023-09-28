var database = require("./database.js");

const Controller = {
    
    GetAllUsers: async ()=> {
        const db = new database();
        const queryResults = await db.executeQuery("SELECT * FROM userInfo");
        db.closePool();
        return queryResults;
    },

    CreateUser: async(email, fName, lName, password)=>{
        const db = new database();
        const result = await db.executeQuery("INSERT INTO userInfo(email, fName, lName, password) \
            VALUES(?, ?, ?, ?) \
            ",[email, fName, lName, password]);

        return result;
    }
}

module.exports = Controller;