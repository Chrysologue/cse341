const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);
let db;

async function connectToDB(dbName) {
  try {
    if(!db){
        await client.connect()
        console.log("Successfully connected to MongoDB Atlas")
        db = client.db(dbName)
    }
  } catch (e) {
    console.log("Connection to MongoDB failed")
  }
  return db
}

module.exports = {connectToDB}
