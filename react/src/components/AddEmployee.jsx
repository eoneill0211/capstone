import { MongoClient } from "mongodb";

const AddEmployee = (props) => {
    // Replace the uri string with your MongoDB deployment's connection string.
    const uri = "localhost:27017";

    // Create a new client and connect to MongoDB
    const client = new MongoClient(uri);

    async function run() {
        try {
            // Connect to the "insertDB" database and access its "haiku" collection
            const database = client.db("capstoneDF");
            const haiku = database.collection("employees");

            // Create a document to insert
            const doc = {
                username: "test",
                content: "No bytes, no problem. Just insert a document, in MongoDB",
            }
            // Insert the defined document into the "haiku" collection
            const result = await employees.insertOne(doc);

            // Print the ID of the inserted document
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
        } finally {
            // Close the MongoDB client connection
            await client.close();
        }
    }

    run();
}
// Run the function and handle any errors
export default AddEmployee;