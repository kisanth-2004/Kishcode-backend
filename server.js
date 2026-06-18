// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // const cors = require("cors");
// // // require("dotenv").config();

// // // const app = express();

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // MongoDB Connection
// // // mongoose
// // //   .connect(process.env.MONGO_URI)
// // //   .then(() => console.log("MongoDB Connected 🚀"))
// // //   .catch((err) => console.log(err));

// // // // Test Route
// // // app.get("/", (req, res) => {
// // //   res.send("KishCode Backend Running 🚀");
// // // });

// // // const PORT = process.env.PORT || 5000;

// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });



// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // require("dotenv").config();

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB Connection
// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => console.log("MongoDB Connected 🚀"))
// //   .catch((err) => console.log(err));

// // // Routes
// // app.use("/api/projects", require("./routes/projectRoutes"));

// // // Test Route
// // app.get("/", (req, res) => {
// //   res.send("KishCode Backend Running 🚀");
// // });

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const contactRoute = require("./routes/contact");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/contact", contactRoute);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// app.listen(process.env.PORT, () => {
//   console.log("Server running on port", process.env.PORT);
// });




// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // routes
// app.use("/api/contact", contactRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://genuine-kitten-4514af.netlify.app",
//     ],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// app.use(express.json());

// // routes
// app.use("/api/contact", contactRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




import dns from "dns";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://genuine-kitten-4514af.netlify.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running successfully 🚀",
  });
});

// Contact Route
app.use("/api/contact", contactRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});