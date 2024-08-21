import React, { useState } from "react";
import "./Form.css";
import { useQuery } from "@tanstack/react-query";
import { postScanResult } from "../Queries/fetchRepo";
function Form() {
  const [status, setStatus] = useState("Queued");
  const [repositoryName, setRepositoryName] = useState("");
  const [finding, setFinding] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      repositoryName,
      status,
      finding,
    };
    postScanResult(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Scan your Repository</h2>
      <div className="repo-row">
        <div className="form-repo margin">
          <label htmlFor="repo">Repository name</label>
          <input
            id="repo"
            type="text"
            value={repositoryName}
            onChange={(e) => setRepositoryName(e.target.value)}
            placeholder="Enter repository name"
          />
        </div>
        <div className="form-repo margin">
          <label htmlFor="status-select">Choose a status</label>
          <select
            id="status-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Queued">Queued</option>
            <option value="In Progress">In Progress</option>
            <option value="Success">Success</option>
            <option value="Failure">Failure</option>
          </select>
        </div>
      </div>
      <div className="form-repo margin">
        <label htmlFor="repo">Findings</label>
        <input
          id="finding"
          type="text"
          value={finding}
          onChange={(e) => setFinding(e.target.value)}
          placeholder="Enter repository name"
        />
      </div>
      <div className="repo-button">
        <button className="button">Scan !</button>
      </div>
    </form>
  );
}

export default Form;
