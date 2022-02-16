const inputRouter = require('express').Router();
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:admin@cluster0.vr1du.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const hlstFun = require('../auto');

inputRouter.post('/api/input', async (req, res) => {
    const { pin } = req.body;
    const hlist = await hlstFun(pin);
    // insert data in mongo
    try {
        await client.connect();
        console.log("first")
        const db = client.db("firstMongo");
        const col = await db.collection("pinData")
        await col.insertOne({
            "pin": pin,
            arr: hlist
        });
        res.json({
            success: 1
        })
        console.log(data)
    } catch (error) {
        res.json({
            success: 0,
            error
        })
    }
})


inputRouter.get("/pinData", async function (req, res) {
    try {
        await client.connect();
        console.log("first")
        const db = client.db("firstMongo");
        const col = await db.collection("pinData")
        res.json(col.find())
    } catch (error) {
        res.json(error)

    }
})

module.exports = inputRouter; 
