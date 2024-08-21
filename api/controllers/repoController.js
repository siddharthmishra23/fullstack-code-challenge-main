import mongoose from "mongoose";
import { RepoSchema } from "../models/repoModel.js";

const Repository = mongoose.model("Repository", RepoSchema);

export const addNewScanResult = (req, res) => {
  console.log("Initial request body:", JSON.stringify(req.body, null, 2));

  let findings = req.body.findings;
  if (typeof findings === "string") {
    try {
      findings = JSON.parse(findings);
    } catch (e) {
      return res
        .status(400)
        .send({ message: "Invalid JSON in findings field" });
    }
  }

  const data = {
    repositoryName: req.body.repositoryName,
    status: req.body.status,
    findings: Array.isArray(req.body.findings.findings)
      ? req.body.findings.findings
      : [],
    queuedAt: req.body.queuedAt || new Date(),
    scanningAt: req.body.scanningAt || new Date(),
    finishedAt: req.body.finishedAt || new Date(),
  };

  console.log("Prepared data for saving:", JSON.stringify(data, null, 2));

  let scanResult = new Repository(data);
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
