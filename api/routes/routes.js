import { addNewScanResult } from "../controllers/repoController.js";
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
};

export default routes;
