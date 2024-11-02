import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to my server!");
});

const port = 2021;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
