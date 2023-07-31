
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://afnanferdousi550:Ywzit1rlrzOkk2D8@cluster0.uko2k5j.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const pcCollection = client.db("pc-builder").collection("pc");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
