const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Log Mongoose version
console.log("Mongoose version:", mongoose.version);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bhuwandb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.error("MongoDB connection error ❌:", err));

// Define schema and model
const userSchema = mongoose.Schema({
    name: String,
    email: String,
});
const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Home page bro");
});

app.get("/create", async (req, res) => {
    try {
        const newUser = await User.create({
            name: "rzp",
            email: "rzp@gmail.com",
        });
        res.send("User created: " + newUser.name);
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).send("Error creating user");
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000 🚀");
});
