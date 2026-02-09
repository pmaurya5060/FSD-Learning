const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = "./data.txt";

// Create / Write
app.post("/write", (req, res) => {
    const { text } = req.body;

    fs.writeFile(FILE_PATH, text, (err) => {
        if (err) {
            return res.status(500).json({ message: "Error writing file" });
        }
        res.json({ message: "File written successfully" });
    });
});

// Read
app.get("/read", (req, res) => {
    fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading file" });
        }
        res.json({ data });
    });
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});
