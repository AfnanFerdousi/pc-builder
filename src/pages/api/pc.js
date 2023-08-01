import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const uri =
    "mongodb+srv://afnanferdousi550:Ywzit1rlrzOkk2D8@cluster0.uko2k5j.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export default async function handler(req, res) {
    try {
        await client.connect();
        const pcCollection = client.db("pc-builder").collection("pc");

        if (req.method === "GET") {
            const { category, limit, id } = req.query;
            if (id) {
                const pc = await pcCollection.findOne({ _id: new ObjectId(id) });
                if (!pc) {
                    return res.status(404).json({
                        status: 404,
                        message: "PC not found",
                    });
                }
                return res.status(200).json({
                    status: 200,
                    message: "success",
                    data: pc,
                });
            }

            

            // Prepare the filter based on the provided category
            const query = category ? { category } : {};

            // Get all PCs or a random subset based on the limit
            let pcs;
            if (limit) {
                pcs = await pcCollection.aggregate([
                    { $match: query },
                    { $sample: { size: parseInt(limit, 10) } },
                ]).toArray();
            } else {
                pcs = await pcCollection.find(query).toArray();
            }

            res.status(200).json({
                status: 200,
                message: "success",
                data: pcs,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: err.message,
        });
    } finally {
        await client.close();
    }
}
