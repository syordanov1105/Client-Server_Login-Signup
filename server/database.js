const mysql = require("mysql2");

class Database{
    constructor(config){
        this.pool = mysql.createPool({
            host: "localhost",
            user: "root",
            port: 3306,
            password: process.env.PASSWORD,
            database: "telebid_app"
        });
    }

    async connect(){
        return new Promise((resolve, reject)=>{
            this.pool.getConnection((error, connection)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(connection);
                }
            });
        });
    }

    async query(connection, sql, values){
        return new Promise((resolve, reject)=>{
            connection.query(sql, values, (error, results)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(results);
                }
            });
        });
    }

    async executeQuery(sql, values = []){
        const connection = await this.connect();
        try{
            const results = await this.query(connection, sql, values);
            return JSON.stringify(results);
        }catch(error){
            throw error;
        }finally{
            connection.release();
        }
    }

    closePool(){
        this.pool.end();
    }
}

module.exports = Database;