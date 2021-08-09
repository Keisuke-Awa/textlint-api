import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 8000;

import router from "./routes/v1/index.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
