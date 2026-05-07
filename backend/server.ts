import express from "express";
import cors from "cors";
import databaseInit from "./db.js";


const app = express();
const port = 3001;

app.use(cors());


app.get("/", (req, res) => {
    res.json({
        message: "Backend ok"
    });
});

async function server() {
    try {
        await databaseInit();

        app.listen(port, () => {
            console.log(`Server running on ${port}`);
        });
    } catch (err) {
        console.error("Server error:", err);
        process.exit(1);
    }
}

await server();

