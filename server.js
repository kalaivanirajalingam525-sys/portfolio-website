const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running");
});

app.get("/api/projects", (req, res) => {
    const projects = [
        {
            title: "Personal Portfolio Website",
            description: "A personal portfolio website to showcase my skills and projects.",
            technologies: "HTML, CSS, JavaScript, Node.js, Express.js"
        },
        {
            title: "Real-Time Weather Dashboard",
            description: "A weather dashboard that displays real-time weather information.",
            technologies: "HTML, CSS, JavaScript"
        },
        {
            title: "AI in Healthcare",
            description: "An AI-based healthcare project for assisting healthcare services.",
            technologies: "Python, AI, Machine Learning"
        }
    ];

    res.json(projects);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});