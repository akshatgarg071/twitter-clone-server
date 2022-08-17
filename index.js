import mongoose from 'mongoose';
import express from 'express'

import cors from 'cors'//const { MongoClient, ServerApiVersion } = require('mongodb');
import PostRoutes from './routes/Post.js'
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://twitter_admin:XkV80JAqGQBEEkrB@cluster0.bpb775a.mongodb.net/?retryWrites=true&w=majority`;
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, () => {console.log(`server running on port ${port}`)}))
    .catch((err) => console.log(err.message))
// async function run() {
//     try {
//         await client.connect();
//         const postCollection = client.db("database").collection("posts");

//         // start from here


//     } catch (error) {
//         console.log(error);
//     }
// } run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from Twitter Clone!')
})

// app.listen(port, () => {
//     console.log(`Twitter clone is listening on port ${port}`)
// })

app.use('/Post', PostRoutes)