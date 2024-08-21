import { addNewScanResult } from "../controllers/repoController.js";
import { getScanResults } from "../controllers/findingsController.js";
const routes = (app) => {
  app
    .route("/submit-repo")
    .get((req, res) => {
      res.send("GET request sucessful");
    })
    .post(addNewScanResult);
  app
    .route("/repo/:repoId")
    .put((req, res) => res.send("PUT request successful"))
    .delete((req, res) => res.send("DELETE request successful"));

  // route for fetching scan results
  app.route("/findings").get(getScanResults);
};

export default routes;
