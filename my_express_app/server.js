const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Route for root
app.get("/", (req, res) => {
  fs.readFile("person.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading person data.");
    }
    const person = JSON.parse(data);
    res.send(`<h1>Welcome ${person.name}</h1>`);
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Sorry! Cant find that resource. Please check your URL");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
