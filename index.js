// import express from 'express'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import dotenv from 'dotenv'


const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;




app.use(cors());
app.use(express.json());
var database;
app.get('/',(req, res) => {
    res.send("This is a twitter-clone clone API")
})
app.get('/getdetails',(req,res)=>{
    database.collection('users').find({}).toArray((err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})
app.post('/logedInUser', (req,res)=>{
    const  logedInUser = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    database.collection('users').insertOne(logedInUser,(err,result)=>
    {
        if(err){
            throw err;
        }else
        res.send(result);
    });
   
})



/*const uri = `mongodb+srv://twitter_admin:XkV80JAqGQBEEkrB@cluster0.bpb775a.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const postCollection = client.db("database").collection("posts"); // this collection is for team-ekt
        const userCollection = client.db("database").collection("users"); // this collection is for team-srv

        // start from here

    } catch (error) {
        console.log(error);
    }
} run().catch(console.dir);*/




app.listen(port, () => {
    console.log(`Twitter clone is listening on port ${port}`);
    MongoClient.connect("mongodb+srv://twitter_admin:XkV80JAqGQBEEkrB@cluster0.bpb775a.mongodb.net/?retryWrites=true&w=majority",(err,result)=>{
        if(err){
            throw err
        }
        else{
            database=result.db('database');
        }
    })
    console.log("database connected")
})

