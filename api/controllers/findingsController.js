import { RepoSchema } from "../models/repoModel.js";
import mongoose from "mongoose";

const Repository = mongoose.model("Repository", RepoSchema);
export const getScanResults = async (req, res) => {
  try {
    const scanResults = await Repository.find({});
    const formattedResults = scanResults.map((scan) => ({
      repositoryName: scan.repositoryName,
      scanStatus: scan.status,
      findingsCount: scan.findings,
      timestamp:
        scan.status === "Queued"
          ? scan.queuedAt
          : scan.status === "In Progress"
          ? scan.scanningAt
          : scan.finishedAt,
    }));
    res.json(formattedResults);
  } catch (err) {
    console.error("Failed to retrieve scan results:", err);
    res.status(500).send("Internal Server Error");
  }
};
