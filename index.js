const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://twitter_admin:XkV80JAqGQBEEkrB@cluster0.bpb775a.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const postCollection = client.db("database").collection("posts"); // this collection is for team-ekt
        const userCollection = client.db("database").collection("users"); // this collection is for team-srv

        // start from here

        app.get("/post", async(req, res)=> {
            const post = await postCollection.find().toArray().reverse;
            res.send(post);
        })
        app.post('/register', async (req, res) => {
            const post = req.body;
            console.log(post);
            const result = await postCollection.insertOne(post);
            res.send(result); 
        })

    } catch (error) {
        console.log(error);
    }
} run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from Twitter Clone!')
})

app.listen(port, () => {
    console.log(`Twitter clone is listening on port ${port}`)
})