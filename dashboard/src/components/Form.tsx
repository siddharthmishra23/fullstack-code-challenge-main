import React from "react";
import "./Form.css";
function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Scan your Repository</h2>
      <div className="repo-row">
        <div className="form-repo no-margin">
          <label htmlFor="repo">Repository name</label>
          <input id="repo" type="text" name="repo" />
        </div>
      </div>
      <div className="repo-button">
        <button className="button">Scan !</button>
      </div>
    </form>
  );
}

export default Form;
