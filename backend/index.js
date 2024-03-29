const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
const teamRoutes = require("./routes/teamRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const projectRoutes = require("./routes/projectRoutes.js");
const reportRoutes = require("./routes/reportRoutes.js");
const commentRoutes = require("./routes/commentRoutes");

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

const corsOptions = {
  origin: "https://project-manager-wine.vercel.app", // Allow requests only from this origin
  methods: ["GET", "POST", "PUT", "DELETE", "UPDATE"], // Allow only specified HTTP methods
  allowedHeaders: ["Content-Type"], // Allow only specified headers
};

// Use the CORS middleware with options
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/comment", commentRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
