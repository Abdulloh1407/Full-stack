const {MongoClient} = require("mongodb");

class MongoDb {
    constructor(){
        this.client = new MongoClient("mongodb://127.0.0.1:27017");
    }
    async connect(){
        await this.client.connect();
    }
    async getDB(){
        return this.client.db("auth")
    }
}

module.exports= new MongoDb();
