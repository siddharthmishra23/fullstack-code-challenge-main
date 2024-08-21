import React, { useState } from "react";
import "./Form.css";
import { useMutation } from "@tanstack/react-query";
import { postScanResult } from "../Queries/fetchRepo";
import { queryClient } from "../Queries/fetchRepo";
function Form() {
  const [status, setStatus] = useState("Queued");
  const [repositoryName, setRepositoryName] = useState("");
  const [finding, setFinding] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { mutate, isError, isPending } = useMutation({
    mutationFn: postScanResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["details"] });
      setStatus("Queued");
      setRepositoryName("");
      setFinding("");
      setErrorMsg("");
    },
    onError: (error) => {
      setErrorMsg(
        error.response.data.message || "An unexpected error occurred."
      );
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    let findingsJson;

    try {
      findingsJson = JSON.parse(finding);
    } catch (e) {
      setErrorMsg("Invalid JSON in findings. Please correct it and try again.");
      return;
    }

    const formData = {
      repositoryName,
      status,
      findings: findingsJson,
    };
    mutate(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Scan your Repository</h1>
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
          placeholder="Enter your findings in JSON"
        />
      </div>
      {isPending ? (
        "Submiting your data..."
      ) : (
        <div className="repo-button">
          <button className="button">Submit your result</button>
        </div>
      )}
      {errorMsg && <div className="error-msg">{errorMsg}</div>}
    </form>
  );
}

export default Form;
