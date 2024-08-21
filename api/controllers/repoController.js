import mongoose from "mongoose";
import { RepoSchema } from "../models/repoModel.js";
const Repository = mongoose.model("Repository", RepoSchema);

export const addNewScanResult = (req, res) => {
  console.log("Received body:", req.body);
  const data = req.body;
  if (typeof data.finding === "string") {
    try {
      data.finding = JSON.parse(data.finding);
    } catch (e) {
      return res
        .status(400)
        .send({ message: "Invalid JSON in findings field" });
    }
  }

  let scanResult = new Repository(data);
  console.log("Created Mongoose model instance:", scanResult);

  scanResult
    .save()
    .then((scan) => {
      console.log("Saved scan result:", scan);
      res.status(201).json(scan);
    })
    .catch((err) => {
      console.error("Error saving scan result:", err);
      res.status(500).send(err);
    });
};
