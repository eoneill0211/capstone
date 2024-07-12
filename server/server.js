import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import {MongoClient, ObjectId} from 'mongodb';
dotenv.config();
const app = express();
app.use(cors()); // Enable CORS for all routes
const PORT = 3000;
const url = process.env.MONGO_DB_URL
const dbName = process.env.MONGO_DB
const collectionName = process.env.MONGO_DB_COLLECTION

// Endpoint to read and send JSON file content
app.get('/employee_directory', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const employee_directory = await collection.find({}).toArray();
        res.json(employee_directory);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Network Error");
    }
});

app.get('/employee_directory/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const info = await collection.find({id: Number(id)}).toArray();
        res.json(info);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error :( ");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});