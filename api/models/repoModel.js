import mongoose from "mongoose";

const Schema = mongoose.Schema;

const positionSchema = new Schema(
  {
    begin: {
      line: { type: Number, required: true },
    },
  },
  { _id: false }
);

const locationSchema = new Schema(
  {
    path: { type: String, required: true },
    positions: positionSchema,
  },
  { _id: false }
);

const metadataSchema = new Schema(
  {
    description: { type: String, required: true },
    severity: { type: String, required: true },
  },
  { _id: false }
);

const findingSchema = new Schema(
  {
    type: { type: String, required: true },
    ruleId: { type: String, required: true },
    location: locationSchema,
    metadata: metadataSchema,
  },
  { _id: false }
);
export const RepoSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["Queued", "In Progress", "Success", "Failure"],
      required: true,
    },
    repositoryName: {
      type: String,
      required: true,
    },
    findings: {
      type: [findingSchema],
      default: [],
    },
    queuedAt: {
      type: Date,
      default: Date.now,
    },
    scanningAt: {
      type: Date,
      default: Date.now,
    },
    finishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
