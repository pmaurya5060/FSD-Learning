const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

// 🔹 Built-in middleware
app.use(cors());
app.use(express.json());

// 🔹 Custom Middleware (REQUIRED FOR YOUR ASSIGNMENT)
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} request received at ${req.url}`);
    next();  // passes control to next middleware/route
};

app.use(loggerMiddleware);

const FILE_PATH = "./data.txt";

// WRITE ROUTE
app.post("/write", (req, res) => {
    const { text } = req.body;

    fs.writeFile(FILE_PATH, text, (err) => {
        if (err) {
            return res.status(500).json({ message: "Error writing file" });
        }
        res.json({ message: "File written successfully" });
    });
});

// READ ROUTE
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
