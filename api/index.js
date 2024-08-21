import express from "express";
import routes from "./routes/routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Use CORS
app.use(cors());

// Setup body parser middleware to parse JSON bodies before routes
app.use(bodyParser.json()); // Parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

// MongoDB connection setup
const PORT = 3002;
const uri =
  "mongodb+srv://admin:admin@project0.de2xuxf.mongodb.net/?retryWrites=true&w=majority&appName=project0";
mongoose.Promise = global.Promise;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Initialize routes
routes(app);

// Root route for simple checks
app.get("/", (req, res) => {
  res.send("Node and Express are running");
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on PORT:", PORT);
});
