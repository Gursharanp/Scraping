const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.vr1du.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
(async () => {
    try {
        await client.connect();
        console.log("first")
        const db = client.db("firstMongo");
        const col = await db.collection("pinData")

        let data = await col.find()
        console.log(data)
    } catch (error) {
        console.log("err")
    }
})()